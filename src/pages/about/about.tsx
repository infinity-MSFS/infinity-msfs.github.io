import { Icons, AboutComponent } from './aboutComponents'

export const About = (): JSX.Element => {
  return (
    <div className=" pt-8 flex flex-col items-center justify-center">
      <div style={{ textShadow: 'white 1px 0 70px' }} className="text-4xl text-center font-bold my-8">
        What makes Infinity launcher so great?
      </div>
      <div className="flex pt-6 flex-row flex-wrap gap-y-8 items-center justify-center max-w-7xl">
        <AboutComponent title="Rust backend" colors={[[246, 76, 0]]} icon={<Icons type="rust" />} />
        <AboutComponent title="React frontend" colors={[[97, 218, 251]]} icon={<Icons type="react" />} />
        <AboutComponent title="Simconnect Built in" colors={[[130, 155, 185]]} icon={<Icons type="airplane" />} />
        <AboutComponent
          title="Automatically locate Community Folder"
          colors={[[155, 45, 250]]}
          icon={<Icons type="folder" />}
        />
        <AboutComponent title="Automatic Updates" colors={[[50, 150, 255]]} icon={<Icons type="sync" />} />
        <AboutComponent title="Fragmented Downloads" colors={[[255, 220, 45]]} icon={<Icons type="fragment" />} />
      </div>
    </div>
  )
}
