import { Route, Routes, useLocation } from "react-router-dom";
import { About } from "../../pages/about/about";
import { Home } from "../../pages/home/home";
import { Navbar } from "../navbar/navbar";
import { Developers } from "../../pages/developers/developers";
import { useEffect } from "react";
import { BackgroundGradientAnimation } from "../aceternity/gradientAnimation";
import { T38ProductPage } from "../../pages/aircraft/aircraft";
import { AuthProvider } from "../../util/AuthContext";
import { UserDashboard } from "../../pages/user/User";
import PurchaseSuccess from "../../pages/purchaseSuccess/PurchaseSuccess";
import PurchaseCancelled from "../../pages/purchaseCancelled/purchaseCancelled";
import { useWebGLSupport } from "../../util/useWebGLSupport";

export const App = (): JSX.Element => {
	const loc = useLocation();
	const { isLowPerformance, isLoading } = useWebGLSupport();

	useEffect(() => {
		if (location.hash === "#/") {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [loc.hash]);

	const content = (
		<div className="h-screen w-screen dark:bg-black/90 dark:bg-dot-white/[0.2] overflow-y-auto overflow-x-hidden bg-dot-black/[0.2] relative">
			{location.hash !== "#/" && (
				<Navbar
					opacity={90}
					buttons={[
						{ string: "Home", to: "/" },
						{ string: "Aircraft", to: "/aircraft" },
						{ string: "Manager", to: "/about" },
					]}
				/>
			)}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/developer" element={<Developers />} />
				<Route path="/aircraft" element={<T38ProductPage />} />
				<Route path="/user" element={<UserDashboard />} />
				<Route path="/purchase-success" element={<PurchaseSuccess />} />
				<Route path="/purchase-cancelled" element={<PurchaseCancelled />} />
			</Routes>
		</div>
	);

	// Show simple background while detecting WebGL capabilities
	if (isLoading) {
		return (
			<AuthProvider>
				<div className="bg-gray-900 min-h-screen">
					{content}
				</div>
			</AuthProvider>
		);
	}

	return (
		<AuthProvider>
			{isLowPerformance ? (
				<div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 min-h-screen">
					{content}
				</div>
			) : (
				<BackgroundGradientAnimation interactive={false}>
					{content}
				</BackgroundGradientAnimation>
			)}
		</AuthProvider>
	);
};