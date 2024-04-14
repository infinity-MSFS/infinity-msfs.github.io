import {
  AutomaticUpdates,
  CommunityFolder,
  FragmentedDownloads,
  LanguagesReact,
  LanguagesRust,
  Simconnect
} from './languages'

export const About = (): JSX.Element => {
  return (
    <div className=" pt-8 flex flex-col items-center justify-center">
      <div style={{ textShadow: 'white 1px 0 10px' }} className="text-3xl ">
        What makes Infinity launcher so great?
      </div>
      <div className="flex pt-6 flex-row flex-wrap gap-y-8 items-center justify-center max-w-7xl">
        <LanguagesRust />
        <LanguagesReact />
        <Simconnect />
        <CommunityFolder />
        <AutomaticUpdates />
        <FragmentedDownloads />
      </div>
    </div>
  )
}
