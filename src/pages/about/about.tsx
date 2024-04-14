import { AboutComponent, AirplaneIcon, FolderIcon, FragmentIcon, ReactIcon, RustIcon, SyncIcon } from './languages'

export const About = (): JSX.Element => {
  return (
    <div className=" pt-8 flex flex-col items-center justify-center">
      <div style={{ textShadow: 'white 1px 0 70px' }} className="text-4xl font-bold my-8">
        What makes Infinity launcher so great?
      </div>
      <div className="flex pt-6 flex-row flex-wrap gap-y-8 items-center justify-center max-w-7xl">
        <AboutComponent title="Rust backend" colors={[[246, 76, 0]]} icon={<RustIcon />} />
        <AboutComponent title="React frontend" colors={[[97, 218, 251]]} icon={<ReactIcon />} />
        <AboutComponent title="Simconnect Built in" colors={[[130, 155, 185]]} icon={<AirplaneIcon />} />
        <AboutComponent title="Automatically locate Community Folder" colors={[[155, 45, 250]]} icon={<FolderIcon />} />
        <AboutComponent title="Automatic Updates" colors={[[50, 150, 255]]} icon={<SyncIcon />} />
        <AboutComponent title="Fragmented Downloads" colors={[[255, 220, 45]]} icon={<FragmentIcon />} />
      </div>
    </div>
  )
}
