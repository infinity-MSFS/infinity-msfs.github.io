import { useState } from "react";
import {
	ShoppingCart,
	Download,
	Users,
	MessageCircle,
	FileText,
	LogIn,
} from "lucide-react";
import { useAuth } from "../../util/AuthContext";

export const T38ProductPage = (): JSX.Element => {
	const [selectedImage, setSelectedImage] = useState(0);
	const [isHovering, setIsHovering] = useState(false);
	const { user, isAuthenticated, loginWithRedirect } = useAuth();
	const user_id = user?.sub;

	const images = [
		"https://i.gyazo.com/547d29151342182bf80397623e52f79e.png",
		"https://i.gyazo.com/221b3ba316dc5fa55533b84126436136.png",
		"https://i.gyazo.com/a4228b64e99c48a60768b74a3c870191.png",
		"https://i.gyazo.com/0081cf97f39b9d05ca602dbb3fdda522.png",
		"https://i.gyazo.com/ae128a49920630cac7176318d0e9f0cc.png",
		"https://i.gyazo.com/651e3bab6fcd20528bee796d1cd6873c.png",
		"https://i.gyazo.com/e45854387a59dfaf3175689ef54613d7.png",
		"https://i.gyazo.com/043f0ddd54ed70941abb0f5765f21866.png",
		"https://i.gyazo.com/6976c28fd92bb800d9a9d73d60bfcbb2.png",
		"https://i.gyazo.com/a5b00903da8d0138c35727753229681e.png",
	];

	const features = [
		"Realistic Flight Model with supersonic performance",
		"High-Fidelity Visuals with PBR textures",
		"Custom Avionics Suite with glass cockpit",
		"Immersive Sound Design with Wwise audio",
		"Fully Functional Systems simulation",
		"Aerobatic & Training Modes",
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

	return (
		<div className="min-h-screen text-white">
			<div className="max-w-7xl mx-auto px-8 py-12">
				{/* Header Section */}

				{/* Product Section */}
				<div className="grid lg:grid-cols-2 gap-12 items-start">
					{/* Left Column - Product Images */}
					<div className="space-y-4">
						{/** biome-ignore lint/a11y/noStaticElementInteractions: needed */}
						<div
							className="aspect-video bg-white/5 rounded-xl overflow-hidden border border-white/10 relative"
							onMouseEnter={() => setIsHovering(true)}
							onMouseLeave={() => setIsHovering(false)}
						>
							<img
								src={images[selectedImage]}
								alt="T-38C Talon"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="grid grid-cols-4 gap-2">
							{images.map((img, index) => (
								<button
									type="button"
									// biome-ignore lint/suspicious/noArrayIndexKey: perfectly fine in this implementaiton
									key={index}
									onClick={() => {
										setSelectedImage(index);
									}}
									className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
										selectedImage === index
											? "border-blue-400"
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
					{isHovering && (
						<div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 transition-opacity duration-200 pointer-events-none">
							<img
								src={images[selectedImage]}
								alt="T-38C Talon Large"
								className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl"
							/>
						</div>
					)}

					{/* Right Column - Product Details */}
					<div className="space-y-8">
						<div>
							<h1 className="text-4xl font-bold mb-2">T-38C Talon</h1>
							<p className="text-lg text-blue-300 mb-4">
								for Microsoft Flight Simulator
							</p>
							<p className="text-sm text-yellow-300 mb-6">
								*Purchase includes aircraft for Microsoft Flight Simulator 2024
								version only.*
							</p>

							<p className="text-white/90 leading-relaxed mb-8">
								The T-38C Talon is the U.S. Air Force's premier supersonic jet
								trainer, renowned for its sleek design, blistering speed, and
								critical role in preparing pilots for advanced fighters like the
								F-22 and F-35. Experience this iconic aircraft in Microsoft
								Flight Simulator with unprecedented realism and immersion.
							</p>

							<div className="flex items-center space-x-4 mb-8">
								<div className="text-3xl font-bold text-green-400">$19.99</div>
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
								Download Manual
							</button>
						</div>
					</div>
				</div>

				{/* Footer Note */}
				<div className="mt-12 text-center text-white/60">
					<p className="mb-2">
						Developed with feedback from T-38C pilots and MSFS community input
						to ensure authenticity.
					</p>
					<p>
						Take command of the T-38C Talon and experience the ultimate jet
						trainer in Microsoft Flight Simulator!
					</p>
				</div>
			</div>
		</div>
	);
};

export default T38ProductPage;
