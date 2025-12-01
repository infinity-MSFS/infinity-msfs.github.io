export const Developers = (): JSX.Element => {
	return (
		<div className="flex flex-col absolute z-40 top-20 left-0  text-slate-300 bg-black/50  gap-5 w-screen items-center">
			<h1 className="text-4xl font-bold mt-8 mb-2">Developers</h1>

			<div className="py-4 px-5 w-11/12 border rounded-md shadow-glow-2xl shadow-white/20">
				<div className="text-2xl font-bold">
					For a developer to be eligible to be on the launcher they must meet
					the following:
				</div>
				<ul className="list-disc pl-6">
					<li>
						At least 1 downloadable package available to the public (we do not
						display development groups that have not released)
					</li>
					<li>
						Ability to apply the appropriate GitHub task for package building to
						your aircraft&apos;s repo (we don&apos;t care if its open source)
					</li>
					<li>
						Comply with the style guide (found below, the standards are very
						lenient)
					</li>
				</ul>
			</div>
			<div className="py-4 px-5 w-11/12 border shadow-glow-2xl shadow-white/20 rounded-md my-2 overflow-x-auto">
				<div className="text-2xl font-bold">Group Manager</div>
				<div className="pb-10">
					Group management is facilitated through a dedicated desktop
					application to ensure consistent output quality. You can find the
					latest build of the application
					<a
						className="text-blue-400"
						href="https://github.com/infinity-MSFS/group-manager/releases/tag/v1.0.2"
					>
						here
					</a>
					.
				</div>
				<div>
					Watch this brief video tutorial on using the group manager. Effective
					communication is essential for us to review your pull requests for
					assets and group information, so please join our
					<a className="text-blue-400" href="https://discord.gg/jEemXDWH">
						Discord
					</a>
					.
					<iframe
						src="https://streamable.com/e/l9eqdi"
						width="100vw"
						height="100vh"
						frameBorder="0"
						allowFullScreen
						style={{ paddingTop: "20px", width: "100%", height: "800px" }}
					></iframe>
				</div>

				<div className="text-2xl font-bold">Style Guide</div>
				<div>
					<div className=" pb-2">
						When you submit a request to join the launcher, please include the
						desired style for your group&apos;s page:
					</div>

					{/* <SyntaxHighlighter language="ts">{code}</SyntaxHighlighter> */}
					<div className=" w-full gap-3 flex flex-col items-center justify-center">
						<img
							className=" rounded-3xl shadow-lg shadow-white/10"
							src="/projects-page.png"
							alt="style ref"
						/>
						<img
							className=" rounded-3xl shadow-lg shadow-white/10"
							src="/home-page.png"
							alt="style ref home page"
						/>
						<img
							className=" rounded-3xl shadow-lg shadow-white/10"
							src="/beta-page.png"
							alt="style ref beta page"
						/>
					</div>
				</div>
				<div></div>
			</div>
			<div className="py-4 px-5 w-11/12 border shadow-glow-2xl shadow-white/20 rounded-md my-2">
				<div className="text-2xl font-bold">Simconnect</div>
				<div>
					Some projects require the use of external systems, implementing these
					are very developer dependent however any developer group is welcome to
					modify backend functionality to accommodate their project&apos;s
					needs. If you are one of these projects, consult with Taco or Techno
					on Discord for more details on how we would like you to implement new
					features.
				</div>
			</div>
		</div>
	);
};
