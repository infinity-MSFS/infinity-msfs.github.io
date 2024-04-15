import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const code = `{
 name: string
 projects: [
       {
         name: string
         version: string
         date: string
         changelog: string
         overview: string
         description: string
         background: string
         pageBackground?: string
         variants?: string[]
         package: {
             owner: string
             repoName: string
             version: string
             fileName: string
           } | null // as stated before, a NULL package is only acceptable if the group has at least one released aircraft
       }
   ]
 beta: {
     background: string
   }
 logo: string
 update?: boolean
 path: string
 palette: {
        // Must be in hex, used to create gradient on home tile and in group page
        primary: string 
        secondary: string
   }
}
`

export const Developers = (): JSX.Element => {
  return (
    <div className="flex flex-col absolute z-40 top-20 left-0  text-slate-300 bg-black/50  gap-5 w-screen items-center">
      <h1 className="text-4xl font-bold mt-8 mb-2">Developers</h1>

      <div className="py-4 px-5 w-11/12 border rounded-md shadow-glow-2xl shadow-white/20">
        <div className="text-2xl font-bold">
          For a developer to be eligible to be on the launcher they must meet the following:
        </div>
        <ul className="list-disc pl-6">
          <li>
            At least 1 downloadable package available to the public (we do not display development groups that have not
            released)
          </li>
          <li>
            Ability to apply the appropriate GitHub task for package building to your aircraft&apos;s repo (we
            don&apos;t care if its open source)
          </li>
          <li>Comply with the style guide (found below, the standards are very lenient)</li>
        </ul>
      </div>
      <div className="py-4 px-5 w-11/12 border shadow-glow-2xl shadow-white/20 rounded-md my-2 overflow-x-auto">
        <div className="text-2xl font-bold">Style Guide</div>
        <div>
          When you submit a request to join the launcher, please include the desired style for your group&apos;s page:
          <SyntaxHighlighter language="ts">{code}</SyntaxHighlighter>
          <div className=" w-full gap-3 flex flex-col items-center justify-center">
            <img
              className=" rounded-3xl shadow-lg shadow-white/10"
              src="https://cdn.discordapp.com/attachments/1228736837946704045/1229282309908336690/projectspage-expl.png?ex=662f1d5d&is=661ca85d&hm=f824c8c04408c49aae907e05484c2bc8d714cfe1bbe87a2cc633ebcef81b397b&"
              alt="style ref"
            />
            <img
              className=" rounded-3xl shadow-lg shadow-white/10"
              src="https://cdn.discordapp.com/attachments/1228736837946704045/1229282309061214308/home-page-expl.png?ex=662f1d5d&is=661ca85d&hm=ae197e9b3251649d1f57afd112f9c15e618340e2e74c5b3d2960994c62e245ea&"
              alt="style ref home page"
            />
            <img
              className=" rounded-3xl shadow-lg shadow-white/10"
              src="https://cdn.discordapp.com/attachments/1228736837946704045/1229282310734479462/beta-page_explanation.png?ex=662f1d5d&is=661ca85d&hm=eb9211f13f6bfd085f8703fea4702a0d098bafd96be86679cfa57b9a7bf408be&"
              alt="style ref beta page"
            />
          </div>
        </div>
        <div></div>
      </div>
      <div className="py-4 px-5 w-11/12 border shadow-glow-2xl shadow-white/20 rounded-md my-2">
        <div className="text-2xl font-bold">Simconnect</div>
        <div>
          Some projects require the use of external systems, implementing these are very developer dependent however any
          developer group is welcome to modify backend functionality to accommodate their project&apos;s needs. If you
          are one of these projects, consult with Taco or Techno on Discord for more details on how we would like you to
          implement new features.
        </div>
      </div>
    </div>
  )
}
