import {
	Code,
	Cog,
	Zap,
	Globe,
	Shield,
	Network,
	Terminal,
	Briefcase,
} from "lucide-react";

export const Opportunity = (): JSX.Element => {
	const responsibilities = [
		{
			id: "aircraft-embedded",
			title: "Aircraft & Embedded Systems",
			icon: Cog,
			color: "blue" as const,
			items: [
				"Design, implement, and maintain aircraft-specific systems for integration into Microsoft Flight Simulator 2024",
				"Convert system logic into WASM-based gauges and embedded modules using C++14 for constrained environments",
				"Work with MSFS-specific SDK components including WASM gauges, SimConnect, and Coherent/in-sim avionics frameworks",
				"Collaborate with the core engineering team to ensure accuracy, performance, and system reliability",
			],
		},
		{
			id: "backend-web",
			title: "Native, Backend, and Web Applications",
			icon: Network,
			color: "purple" as const,
			items: [
				"Build and extend native desktop applications (C++26 and Rust 2024) powering our ecosystem—licensing, networking, patching, installers, and configuration tools",
				"Develop and maintain web services, P2P networking layers, and real-time communication systems (WebRTC + Rust async)",
				"Implement secure and optimized REST/GraphQL/WebRTC flows using proprietary or poorly documented APIs",
			],
		},
		{
			id: "frontend",
			title: "Frontend Engineering",
			icon: Code,
			color: "cyan" as const,
			items: [
				"Bring UI concepts to life using React, TypeScript, and modern frontend tooling",
				"Work with or learn the MSFS Avionics/Coherent framework (class-based system similar to React patterns)",
				"Improve existing UIs used by pilots, customers, and internal tools",
			],
		},
		{
			id: "tooling",
			title: "Tooling, Scripting, and Deployment",
			icon: Terminal,
			color: "orange" as const,
			items: [
				"Write automation pipelines using Python, Shell (sh), PowerShell, and YAML/GitHub Actions",
				"Optimize deployments for installers, WASM payloads, patch pipelines, and cloud assets",
				"Maintain clean and reliable internal tooling for development workflows",
			],
		},
		{
			id: "team-process",
			title: "Team & Process",
			icon: Briefcase,
			color: "green" as const,
			items: [
				"Participate in code reviews, follow structured pull-request requirements, and adhere to Infinity's engineering workflow",
				"Follow the company's published coding standards and contribute to improving them",
				"Collaborate cross-functionally with systems engineers, artists, QA, and platform teams",
			],
		},
	];

	const requiredQualifications = [
		{
			id: "cpp-expertise",
			title: "C++ Expertise",
			icon: Code,
			color: "blue" as const,
			items: [
				"Deep understanding of C++14 for embedded/WASM systems and C++26 for native applications",
				"Experienced with embedded constraints, memory management, and writing safe, secure, modern C++",
				"Ability to quickly adapt to MSFS-specific C++ APIs (SDK, SimConnect)",
                "Ability to work with networking APIs using callbacks and event-driven architectures",
				"Comfortable working with undocumented or partially documented APIs",
			],
		},
		{
			id: "rust-expertise",
			title: "Rust Expertise",
			icon: Zap,
			color: "orange" as const,
			items: [
				"Strong command of Rust 2021/2024, including async/await, multithreading (Tokio, Rayon, or similar), and safe and high-performance systems design",
				"Experience with WebRTC, low-latency networking, or distributed systems is highly valued",
                "Familiarity with Tauri is recommended",
                "Ability to interact with C/C++ code via FFI for native application development",
                "Experience with AWS S3 SDK",
			],
		},
		{
			id: "typescript-frontend",
			title: "TypeScript / Frontend",
			icon: Globe,
			color: "cyan" as const,
			items: [
				"Strong ability to turn concepts into polished UIs using TypeScript and React",
				"Ability to adapt quickly to MSFS avionics frameworks (similar to React state/props patterns)",
			],
		},
		{
			id: "automation",
			title: "Automation & Tooling",
			icon: Terminal,
			color: "purple" as const,
			items: [
				"Python scripting for pipelines, data processing, or deployment automation",
				"Strong experience with shell scripting (sh, bash) and/or PowerShell for cross-platform tooling",
				"Familiarity with CI/CD and YAML configuration (GitHub Actions, Azure, etc.)",
                "Experience with AWS and CloudFlare"
			],
		},
	];

	const preferredQualifications = [
		{
			id: "sim-aerospace",
			text: "Experience in simulation, aerospace, or real-time embedded systems",
		},
		{
			id: "multiplayer",
			text: "Familiarity with multiplayer or P2P networking",
		},
		{
			id: "wasm",
			text: "Prior contributions to WASM projects or game-engine integration",
		},
		{
			id: "security",
			text: "Understanding of cryptography, secure distribution, or licensing systems",
		},
	];

	const offerings = [
		{
			id: "ecosystem",
			text: "Opportunity to work on one of the most advanced third-party ecosystems for MSFS 2024",
		},
		{
			id: "remote",
			text: "Flexible remote/hybrid environment",
		},
		{
			id: "autonomy",
			text: "Autonomy, creative ownership, and a highly skilled engineering team",
		},
		{
			id: "tech-stack",
			text: "Cutting-edge technology stack spanning embedded, native, and cloud systems",
		},
	];

	const compensation = {
		structure: "Commission-based",
		model: "Percentage stake in project revenue upon completion",
	};

	const colorClasses = {
		blue: {
			bg: "bg-blue-500/20",
			text: "text-blue-400",
			border: "border-blue-500/20",
		},
		purple: {
			bg: "bg-purple-500/20",
			text: "text-purple-400",
			border: "border-purple-500/20",
		},
		cyan: {
			bg: "bg-cyan-500/20",
			text: "text-cyan-400",
			border: "border-cyan-500/20",
		},
		orange: {
			bg: "bg-orange-500/20",
			text: "text-orange-400",
			border: "border-orange-500/20",
		},
		green: {
			bg: "bg-green-500/20",
			text: "text-green-400",
			border: "border-green-500/20",
		},
		yellow: {
			bg: "bg-yellow-500/20",
			text: "text-yellow-400",
			border: "border-yellow-500/20",
		},
	};

	return (
		<div className="min-h-screen text-white py-12 px-4">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<div className="text-center mb-12">
					<h1
						style={{ textShadow: "white 1px 0 70px" }}
						className="text-5xl font-bold mb-4"
					>
						Join Our Team
					</h1>
					<h2 className="text-3xl font-semibold mb-4 text-white/90">
						Software Engineer / Full-Stack Developer
					</h2>
					<p className="text-xl text-white/80">
						Infinity Simulations – Remote / Hybrid
					</p>
				</div>

				{/* Introduction */}
				<div className="max-w-4xl mx-auto mb-16">
					<div className="bg-white/5 rounded-xl p-8 border border-white/10">
						<p className="text-white/90 leading-relaxed mb-6">
							Infinity Simulations is building the next generation of
							high-fidelity aircraft systems, avionics, multiplayer
							technologies, and developer tooling for Microsoft Flight Simulator
							2024. We are looking for a highly skilled{" "}
							<span className="font-semibold text-white">
								Software Engineer / Full-Stack Developer
							</span>{" "}
							capable of operating across embedded C++ systems, Rust backend
							services, modern TypeScript front-ends, and internal automation
							pipelines.
						</p>
						<p className="text-white/90 leading-relaxed">
							If you thrive in complex ecosystems, enjoy solving undocumented
							integration challenges, and want to help build cutting-edge
							simulation products,{" "}
							<span className="font-semibold text-white">
								this role is for you
							</span>
							.
						</p>
					</div>
				</div>

				{/* Responsibilities */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-8 text-center">
						Responsibilities
					</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{responsibilities.map((section) => {
							const Icon = section.icon;
							const colors = colorClasses[section.color];
							return (
								<div
									key={section.id}
									className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors"
								>
									<div className="flex items-center gap-4 mb-4">
										<div className={`${colors.bg} p-3 rounded-lg`}>
											<Icon className={`w-8 h-8 ${colors.text}`} />
										</div>
										<h3 className="text-xl font-semibold">{section.title}</h3>
									</div>
									<ul className="space-y-3">
										{section.items.map((item) => (
											<li
												key={item.substring(0, 30)}
												className="text-white/70 text-sm leading-relaxed flex gap-2"
											>
												<span className={`${colors.text} mt-1`}>•</span>
												<span>{item}</span>
											</li>
										))}
									</ul>
								</div>
							);
						})}
					</div>
				</div>

				{/* Required Qualifications */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-8 text-center">
						Required Qualifications
					</h2>
					<div className="grid md:grid-cols-2 gap-6">
						{requiredQualifications.map((section) => {
							const Icon = section.icon;
							const colors = colorClasses[section.color];
							return (
								<div
									key={section.id}
									className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors"
								>
									<div className="flex items-center gap-4 mb-4">
										<div className={`${colors.bg} p-3 rounded-lg`}>
											<Icon className={`w-8 h-8 ${colors.text}`} />
										</div>
										<h3 className="text-xl font-semibold">{section.title}</h3>
									</div>
									<ul className="space-y-3">
										{section.items.map((item) => (
											<li
												key={item.substring(0, 30)}
												className="text-white/70 text-sm leading-relaxed flex gap-2"
											>
												<span className={`${colors.text} mt-1`}>•</span>
												<span>{item}</span>
											</li>
										))}
									</ul>
								</div>
							);
						})}
					</div>
				</div>

				{/* Preferred Qualifications */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-8 text-center">
						Preferred Qualifications
					</h2>
					<div className="max-w-4xl mx-auto">
						<div className="bg-white/5 rounded-xl p-8 border border-white/10">
							<ul className="space-y-4">
								{preferredQualifications.map((item) => (
									<li
										key={item.id}
										className="text-white/80 leading-relaxed flex gap-3"
									>
										<Shield className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
										<span>{item.text}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				{/* Compensation Structure */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-8 text-center">
						Compensation Structure
					</h2>
					<div className="max-w-4xl mx-auto">
						<div className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-xl p-8 border border-green-500/20">
							<div className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="bg-green-500/20 p-3 rounded-lg flex-shrink-0">
										<Briefcase className="w-6 h-6 text-green-400" />
									</div>
									<div className="flex-1">
										<h3 className="text-xl font-semibold mb-2 text-white">
											{compensation.structure}
										</h3>
										<p className="text-white/80 leading-relaxed mb-4">
											This position operates on a commission-based model. Payment is received upon project completion, structured as a{" "}
											<span className="font-semibold text-white">percentage stake in the project's revenue</span>.
										</p>
										<p className="text-white/70 text-sm leading-relaxed">
											Prior to project commencement, we'll establish a contract that includes a variable compensation stake. The upper and lower limits of your percentage stake will be discussed and agreed upon during contract negotiations, based on your experience, role scope, and expected contribution. This model directly aligns your success with the project's performance.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* What We Offer */}
				<div className="mb-16">
					<h2 className="text-3xl font-bold mb-8 text-center">
						What We Offer
					</h2>
					<div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
						{offerings.map((item) => {
							const colorMap = {
								ecosystem: colorClasses.blue,
								remote: colorClasses.purple,
								autonomy: colorClasses.orange,
								"tech-stack": colorClasses.cyan,
							};
							const color = colorMap[item.id as keyof typeof colorMap];
							return (
								<div
									key={item.id}
									className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors"
								>
									<div className="flex gap-4 items-start">
										<div className={`${color.bg} p-3 rounded-lg flex-shrink-0`}>
											<Zap className={`w-6 h-6 ${color.text}`} />
										</div>
										<p className="text-white/80 leading-relaxed">{item.text}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				{/* Call to Action */}
				<div className="max-w-4xl mx-auto">
					<div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-xl p-8 border border-white/10 text-center">
						<h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
						<p className="text-white/80 mb-6">
							Join us in building the future of flight simulation. Send your
							resume and portfolio to get started.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							
							<a
								href="https://discord.gg/HZt4MCEYZk"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-[#5865F2]/10 hover:bg-[#5865F2]/20 transition-colors border border-[#5865F2]/20 hover:border-[#5865F2]/40"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
									<title>Discord</title>
									<path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
								</svg>
								<span className="font-medium">Join Discord</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
