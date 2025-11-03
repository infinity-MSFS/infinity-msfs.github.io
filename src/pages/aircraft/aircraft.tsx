import { useState, useEffect } from "react";
import {
	ShoppingCart,
	Download,
	Users,
	MessageCircle,
	FileText,
	LogIn,
	ZoomIn,
	X,
	Play,
	Pause,
} from "lucide-react";
import { useAuth } from "../../util/AuthContext";

export const T38ProductPage = (): JSX.Element => {
	const [selectedImage, setSelectedImage] = useState(0);
	const [isZoomed, setIsZoomed] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [isPlaying, setIsPlaying] = useState(true);
	const { user, isAuthenticated, loginWithRedirect } = useAuth();
	const user_id = user?.sub;

	const images = [
		"https://i.gyazo.com/7d933a5426c4230744fcb87341d17b47.png",
		"https://i.gyazo.com/2872c40132aa53ae5755134a458702ba.png",
		"https://i.gyazo.com/a858613b7cdba9a0eebf2349578848fc.png",
		"https://i.gyazo.com/e456df009b1be6ed5fb03bd05f28d7a8.png",
		"https://i.gyazo.com/40d9fe23bb6bdc58ddc4313e2f384cd6.png",
		"https://i.gyazo.com/59b9f2b1dd8a129adf91cf662e9f8e4d.png",
		"https://i.gyazo.com/942427990d0a497470bb28ad5b4963b9.png",
		"https://i.gyazo.com/9857a3c6e790cbc9d407313d54b963f6.png",
		"https://i.gyazo.com/a09d9028403d7e1d61411576e4bbc973.png",
		"https://i.gyazo.com/de6d1d732cd78e0027e687f68a519375.png",
		"https://i.gyazo.com/ef58918c12b981dc8ab00fd8c31e582e.png",
		"https://i.gyazo.com/d0f3cf113d6bd3fbff0d43e7b64a9c8e.png",
		"https://i.gyazo.com/65d3f0853fa7408ff8d80b1c07cc1217.png",
		"https://i.gyazo.com/935767198e2377593ab190b6b4663c66.png",
		"https://i.gyazo.com/a5b153756fc81535db90123768fcec93.png",
		"https://i.gyazo.com/311b37136b44e1ff916eca8a4e1d4d13.png",

	];

	const features = [
		"Realistic Flight Model with supersonic performance",
		"High-Fidelity Visuals with PBR textures",
		"Custom Avionics Suite with glass cockpit",
		"Immersive Sound Design with Wwise audio",
		"Fully Functional Systems simulation",
		"Navigation & Training Modes",
		"10+ Authentic Liveries",
		"Electronic Flight Bag (EFB)",
		"Interactive Pilot Kneeboard",
		"Commandable Ground Crew",
		"Custom Effects and wingflex",
		"4 Selectable Configurations",
	];

	const specs = [
		{ label: "Range", value: "1,140 nm" },
		{ label: "Max Speed", value: "Mach 1.3" },
		{ label: "Stall Speed", value: "160 kt" },
		{ label: "Climb Rate", value: "33,600 ft/min" },
		{ label: "Service Ceiling", value: "50,000 ft" },
		{ label: "Length", value: "46 ft 8 in" },
		{ label: "Wingspan", value: "25 ft 3 in" },
		{ label: "Max Takeoff Weight", value: "12,000 lb" },
	];

	// Auto-advance images every 5 seconds, but only when not zoomed and playing
	useEffect(() => {
		if (isZoomed || !isPlaying) return; // Don't auto-advance when zoomed or paused

		const interval = setInterval(() => {
			setIsTransitioning(true);
			setTimeout(() => {
				setSelectedImage((prev) => (prev + 1) % images.length);
				setIsTransitioning(false);
			}, 300); // Half of the transition duration for crossfade effect
		}, 5000);

		return () => clearInterval(interval);
	}, [images.length, isZoomed, isPlaying]); // Added isPlaying to dependency array

	const handleImageClick = () => {
		setIsZoomed(true);
	};

	const handleCloseZoom = () => {
		setIsZoomed(false);
	};

	const handleThumbnailClick = (index: number) => {
		setIsTransitioning(true);
		setTimeout(() => {
			setSelectedImage(index);
			setIsTransitioning(false);
		}, 300);
	};

	const togglePlayPause = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="min-h-screen text-white relative z-10">
			<div className="max-w-7xl mx-auto px-8 py-12">
				{/* Header Section */}

				{/* Product Section */}
				<div className="grid lg:grid-cols-2 gap-12 items-start">
					{/* Left Column - Product Images */}
					<div className="space-y-4 relative z-10">
						{/** biome-ignore lint/a11y/noStaticElementInteractions: needed */}
						<div
							className="aspect-video bg-white/5 rounded-xl overflow-hidden border border-white/10 relative group cursor-zoom-in"
							onClick={handleImageClick}
						>
							<img
								src={images[selectedImage]}
								alt="T-38C Talon"
								className={`w-full h-full object-cover transition-all duration-600 group-hover:scale-105 ${isTransitioning ? "opacity-0" : "opacity-100"
									}`}
								style={{ transition: "opacity 0.6s ease-in-out, transform 0.3s ease" }}
							/>
							{/* Hover overlay with zoom icon */}
							<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
								<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm rounded-full p-4">
									<ZoomIn className="w-8 h-8 text-white" />
								</div>
							</div>
							{/* Image counter */}
							<div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
								{selectedImage + 1} / {images.length}
							</div>
							{/* Play/Pause button - only visible on hover */}
							<button
								type="button"
								onClick={(e) => {
									e.stopPropagation();
									togglePlayPause();
								}}
								className="absolute bottom-4 left-4 bg-black/60 hover:bg-black/80 backdrop-blur-sm rounded-full p-2 transition-all z-10 opacity-0 group-hover:opacity-100"
								aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
							>
								{isPlaying ? (
									<Pause className="w-5 h-5 text-white" />
								) : (
									<Play className="w-5 h-5 text-white" />
								)}
							</button>
						</div>
						<div
							className="grid grid-cols-4 gap-2 max-h-[200px] overflow-y-auto overflow-x-hidden scroll-smooth"
							style={{
								scrollbarWidth: 'thin',
								scrollbarColor: 'rgba(255, 255, 255, 0.3) transparent'
							}}
						>
							{images.map((img, index) => (
								<button
									type="button"
									// biome-ignore lint/suspicious/noArrayIndexKey: perfectly fine in this implementaiton
									key={index}
									onClick={() => handleThumbnailClick(index)}
									className={`aspect-video rounded-lg overflow-hidden border-2 transition-all transform hover:scale-105 ${selectedImage === index
										? "border-blue-400 shadow-lg shadow-blue-400/50"
										: "border-white/20 hover:border-white/40"
										}`}
								>
									<img
										src={img}
										alt={`T-38C ${index + 1}`}
										className="w-full h-full object-cover"
									/>
								</button>
							))}
						</div>
					</div>

					{/* Full Resolution Image Modal */}
					{isZoomed && (
						// biome-ignore lint/a11y/useKeyWithClickEvents: close button handles keyboard
						// biome-ignore lint/a11y/noStaticElementInteractions: backdrop click to close
						<div
							className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 animate-fadeIn"
							onClick={handleCloseZoom}
						>
							{/* Close button */}
							<button
								type="button"
								onClick={handleCloseZoom}
								className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all z-10 group"
								aria-label="Close zoom"
							>
								<X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
							</button>

							{/* Image counter in zoom mode */}
							<div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white z-10">
								<span className="font-semibold">
									{selectedImage + 1} / {images.length}
								</span>
							</div>

							{/* Navigation arrows */}
							{selectedImage > 0 && (
								<button
									type="button"
									onClick={(e) => {
										e.stopPropagation();
										handleThumbnailClick(selectedImage - 1);
									}}
									className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all z-10"
									aria-label="Previous image"
								>
									<svg
										className="w-6 h-6 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 19l-7-7 7-7"
										/>
									</svg>
								</button>
							)}

							{selectedImage < images.length - 1 && (
								<button
									type="button"
									onClick={(e) => {
										e.stopPropagation();
										handleThumbnailClick(selectedImage + 1);
									}}
									className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all z-10"
									aria-label="Next image"
								>
									<svg
										className="w-6 h-6 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</button>
							)}

							{/** biome-ignore lint/a11y/noStaticElementInteractions: needed for image display */}
							<div
								className="relative max-w-[95vw] max-h-[95vh]"
								onClick={(e) => e.stopPropagation()}
							>
								<img
									src={images[selectedImage]}
									alt="T-38 Talon Full Resolution"
									className={`max-w-full max-h-[95vh] w-auto h-auto object-contain rounded-lg shadow-2xl transition-opacity duration-600 ${isTransitioning ? "opacity-0" : "opacity-100"
										}`}
								/>
							</div>

							{/* Thumbnail strip at bottom - no scrollbar */}
							<div className="absolute bottom-4 left-1/2 -translate-x-1/2 overflow-hidden max-w-[90vw]">
								<div className="flex flex-wrap justify-center gap-2 bg-black/60 backdrop-blur-sm p-2 rounded-lg">
									{images.map((img, index) => (
										<button
											type="button"
											// biome-ignore lint/suspicious/noArrayIndexKey: fine here
											key={index}
											onClick={(e) => {
												e.stopPropagation();
												handleThumbnailClick(index);
											}}
											className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden transition-all ${selectedImage === index
												? "border-blue-400 scale-110"
												: "border-white/30 hover:border-white/60"
												}`}
										>
											<img
												src={img}
												alt={`T-38 ${index + 1}`}
												className="w-full h-full object-cover"
											/>
										</button>
									))}
								</div>
							</div>
						</div>
					)}

					{/* Right Column - Product Details */}
					<div className="space-y-8 relative z-10">
						<div>
							<h1 className="text-4xl font-bold mb-2">T-38 Talon</h1>
							<p className="text-lg text-blue-300 mb-4">
								for Microsoft Flight Simulator
							</p>
							<p className="text-sm text-yellow-300 mb-6">
								*Purchase includes aircraft for Microsoft Flight Simulator 2024
								version only.*
							</p>

							<p className="text-white/90 leading-relaxed mb-8">
								The T-38 Talon is the U.S. Air Force's premier supersonic jet
								trainer, renowned for its sleek design, blistering speed, and
								critical role in preparing pilots for advanced fighters like the
								F-22 and F-35. Experience this iconic aircraft in Microsoft
								Flight Simulator with unprecedented realism and immersion.
							</p>

							<div className="flex items-center space-x-4 mb-8">
								<div className="text-3xl font-bold text-green-400">$29.99</div>
							</div>

							{isAuthenticated && user ? (
								<div className="flex space-x-4 mb-8">
									<a
										href={`https://infinitymsfs.lemonsqueezy.com/buy/9f0bf9c5-fabd-47c6-bb75-4acf64f1130b?checkout[custom][auth0_user_id]=${user_id}`}
										target="_blank"
									>
										<button
											type="button"
											className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
										>
											<ShoppingCart className="w-5 h-5" />
											<span>Purchase</span>
										</button>
									</a>
								</div>
							) : (
								<div className="flex space-x-4 mb-8">
									<button
										type="button"
										onClick={loginWithRedirect}
										className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
									>
										<LogIn className="w-5 h-5" />
										<span>Sign In To Purchase</span>
									</button>
								</div>
							)}

							<div className="grid grid-cols-3 gap-4 text-center py-6 border-y border-white/10">
								<div>
									<Download className="w-6 h-6 mx-auto mb-2 text-blue-400" />
									<div className="text-sm text-white/60">Instant Download</div>
								</div>
								<div>
									<Users className="w-6 h-6 mx-auto mb-2 text-green-400" />
									<div className="text-sm text-white/60">Discord Support</div>
								</div>
								<div>
									<FileText className="w-6 h-6 mx-auto mb-2 text-purple-400" />
									<div className="text-sm text-white/60">Full Manual</div>
									<div className="text-sm text-white/60">(WIP)</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Features Section */}
				<div className="mt-16">
					<h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
						{features.map((feature, index) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: fine here
								key={index}
								className="bg-white/5 rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-colors"
							>
								<div className="flex items-start space-x-3">
									<div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
									<span className="text-white/90">{feature}</span>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Specifications */}
				<div className="mt-16">
					<h2 className="text-3xl font-bold mb-8 text-center">
						Performance Specifications
					</h2>
					<div className="bg-white/5 rounded-xl p-8 border border-white/10">
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							{specs.map((spec, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: fine here
								<div key={index} className="text-center">
									<div className="text-2xl font-bold text-blue-400 mb-1">
										{spec.value}
									</div>
									<div className="text-white/60 text-sm">{spec.label}</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Support Section */}
				<div className="mt-16 bg-white/5 rounded-xl p-8 border border-white/10">
					<h2 className="text-2xl font-bold mb-6 text-center">
						Support & Community
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						<div className="text-center">
							<MessageCircle className="w-12 h-12 mx-auto mb-4 text-blue-400" />
							<h3 className="text-xl font-semibold mb-2">Discord Server</h3>
							<p className="text-white/60 mb-4">
								Join our community for support, updates, and discussions
							</p>
							<a
								href="https://discord.gg/9kVXgjccXa"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors"
							>
								Join Discord
							</a>
						</div>
						<div className="text-center">
							<FileText className="w-12 h-12 mx-auto mb-4 text-green-400" />
							<h3 className="text-xl font-semibold mb-2">Flight Manual</h3>
							<p className="text-white/60 mb-4">
								Comprehensive documentation and procedures guide
							</p>
							<button
								type="button"
								className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
							>
                                WORK IN PROGRESS
							</button>
						</div>
					</div>
				</div>

				{/* Footer Note */}
				<div className="mt-12 text-center text-white/60">
					<p className="mb-2">
						Developed with feedback from T-38 pilots and MSFS community input
						to ensure authenticity.
					</p>
					<p>
						Take command of the T-38 Talon and experience the ultimate jet
						trainer in Microsoft Flight Simulator!
					</p>
				</div>
			</div>
		</div>
	);
};

export default T38ProductPage;