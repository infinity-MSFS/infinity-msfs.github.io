import {
	Cog,
	Plane,
	RefreshCw,
	Download,
	Monitor,
	Workflow,
} from "lucide-react";

export const About = (): JSX.Element => {
	return (
		<div className="min-h-screen text-white py-12 px-4">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<h1
						style={{ textShadow: "white 1px 0 70px" }}
						className="text-5xl font-bold mb-4"
					>
						The Infinity Manager
					</h1>
					<p className="text-xl text-white/80">
						Optional addon configurator for Infinity aircraft
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 mb-16">
					<div className="space-y-4">
						<div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
							<img
								src="/manager.png"
								alt="Infinity Manager Interface"
								className="w-full h-auto"
							/>
						</div>
					</div>

					<div className="space-y-6 relative z-10">
						<div>
							<h2 className="text-3xl font-bold mb-4">About the Manager</h2>
							<p className="text-white/90 leading-relaxed mb-6">
								The Infinity Manager is an optional addon configurator designed
								to unlock the full potential of Infinity aircraft. While your
								aircraft work perfectly without it, the Manager provides
								advanced features like addon configuration, seamless updates,
								P2P multiplayer support, and powerful utilities that enhance
								your flying experience.
							</p>
							<p className="text-white/90 leading-relaxed mb-6">
								Built from the ground up in Rust for blazing-fast performance,
								memory safety, and rock-solid reliability, the Manager delivers
								a smooth and responsive experience every time you use it.
							</p>
							<div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
								<p className="text-blue-300 text-sm">
									The Manager comes standard with the purchase of any Infinity
									aircraft and will be made publicly available once our free
									addons are released.
								</p>
							</div>
							<div className="flex gap-4">
								<a
									href="https://discord.gg/HZt4MCEYZk"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#5865F2]/10 hover:bg-[#5865F2]/20 transition-colors border border-[#5865F2]/20 hover:border-[#5865F2]/40"
								>
									<svg
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<title>Discord</title>
										<path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
									</svg>
									<span className="text-sm font-medium">Join Discord</span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-16">
					<h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-orange-500/20 p-3 rounded-lg">
									<Workflow className="w-8 h-8 text-orange-400" />
								</div>
								<h3 className="text-xl font-semibold">Pure Rust</h3>
							</div>
							<p className="text-white/70">
								Built from the ground up in Rust for blazing-fast performance,
								memory safety, and rock-solid reliability.
							</p>
						</div>

						<div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-purple-500/20 p-3 rounded-lg">
									<Cog className="w-8 h-8 text-purple-400" />
								</div>
								<h3 className="text-xl font-semibold">Addon Configuration</h3>
							</div>
							<p className="text-white/70">
								Fine-tune every aspect of your aircraft addons with an intuitive
								configuration interface.
							</p>
						</div>

						<div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-blue-500/20 p-3 rounded-lg">
									<Plane className="w-8 h-8 text-blue-400" />
								</div>
								<h3 className="text-xl font-semibold">P2P Multiplayer</h3>
							</div>
							<p className="text-white/70">
								Connect directly with other pilots using peer-to-peer
								multiplayer technology for synchronized flying.
							</p>
						</div>

						<div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-cyan-500/20 p-3 rounded-lg">
									<RefreshCw className="w-8 h-8 text-cyan-400" />
								</div>
								<h3 className="text-xl font-semibold">Automatic Updates</h3>
							</div>
							<p className="text-white/70">
								Stay up-to-date effortlessly with seamless automatic updates for
								all your Infinity aircraft.
							</p>
						</div>

						<div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-yellow-500/20 p-3 rounded-lg">
									<Download className="w-8 h-8 text-yellow-400" />
								</div>
								<h3 className="text-xl font-semibold">Fragmented Downloads</h3>
							</div>
							<p className="text-white/70">
								Intelligent download management with fragmentation for faster,
								more reliable addon installations.
							</p>
						</div>

						<div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
							<div className="flex items-center gap-4 mb-4">
								<div className="bg-amber-500/20 p-3 rounded-lg">
									<Monitor className="w-8 h-8 text-amber-400" />
								</div>
								<h3 className="text-xl font-semibold">Cross Platform</h3>
							</div>
							<p className="text-white/70">
								Available on Windows and Linux, ensuring all pilots can access
								the full Infinity experience.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};