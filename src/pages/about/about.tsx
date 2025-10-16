import { Icons, AboutComponent } from "./aboutComponents";

export const About = (): JSX.Element => {
	return (
		<div className=" pt-8 flex flex-col items-center justify-center">
			<div
				style={{ textShadow: "white 1px 0 70px" }}
				className="text-4xl text-center font-bold my-8"
			>
				The Infinity Launcher
			</div>
			<div className="text-center text-lg max-w-2xl px-4">
				The Infinity Launcher is a powerful tool designed to enhance your
				Microsoft Flight Simulator experience. It simplifies the process of
				installing and managing aircraft packages, ensuring you can focus on
				flying rather than troubleshooting. With its user-friendly interface and
				robust features, the Infinity Launcher is your go-to solution for all
				your flight sim needs.
			</div>
			<div className="flex pt-6 flex-row flex-wrap gap-y-8 items-center justify-center max-w-7xl">
				<AboutComponent
					title="Pure C++ 26"
					colors={[[0, 76, 246]]}
					icon={<Icons type="c++" />}
				/>
				<AboutComponent
					title="Cross Platform"
					colors={[[240, 168, 0]]}
					icon={<Icons type="linux" />}
				/>
				<AboutComponent
					title="Simconnect support"
					colors={[[130, 155, 185]]}
					icon={<Icons type="airplane" />}
				/>
				<AboutComponent
					title="Automatically locate Community Folder"
					colors={[[155, 45, 250]]}
					icon={<Icons type="folder" />}
				/>
				<AboutComponent
					title="Automatic Updates"
					colors={[[50, 150, 255]]}
					icon={<Icons type="sync" />}
				/>
				<AboutComponent
					title="Fragmented Downloads"
					colors={[[255, 220, 45]]}
					icon={<Icons type="fragment" />}
				/>
			</div>
		</div>
	);
};
