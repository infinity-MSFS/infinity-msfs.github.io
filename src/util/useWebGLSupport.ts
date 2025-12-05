import { useState, useEffect } from "react";

interface WebGLSupportResult {
	supportsWebGL: boolean;
	isLowPerformance: boolean;
	isLoading: boolean;
}

export const useWebGLSupport = (): WebGLSupportResult => {
	const [result, setResult] = useState<WebGLSupportResult>({
		supportsWebGL: true,
		isLowPerformance: false,
		isLoading: true,
	});

	useEffect(() => {
		const checkWebGL = () => {
			try {
				const canvas = document.createElement("canvas");
				const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

				if (!gl) {
					return { supportsWebGL: false, isLowPerformance: true, isLoading: false };
				}

				// Check for software rendering (no hardware acceleration)
				const debugInfo = (gl as WebGLRenderingContext).getExtension("WEBGL_debug_renderer_info");
				if (debugInfo) {
					const renderer = (gl as WebGLRenderingContext).getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
					const isSoftwareRenderer =
						renderer.includes("SwiftShader") ||
						renderer.includes("Software") ||
						renderer.includes("llvmpipe");

					return { supportsWebGL: true, isLowPerformance: isSoftwareRenderer, isLoading: false };
				}

				return { supportsWebGL: true, isLowPerformance: false, isLoading: false };
			} catch {
				return { supportsWebGL: false, isLowPerformance: true, isLoading: false };
			}
		};

		setResult(checkWebGL());
	}, []);

	return result;
};