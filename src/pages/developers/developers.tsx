import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

<<<<<<< Updated upstream
const code = `
{
=======
const code = `{
>>>>>>> Stashed changes
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
    <div className="flex flex-col  text-slate-300  gap-5 w-screen items-center">
<<<<<<< Updated upstream
      <h1 className="mt-5 text-3xl  font-bold">Developers</h1>

      <div className=" p-3 w-11/12 border shadow-md shadow-white rounded-md ">
        <div className="text-xl">
          For a developer to be eligible to be on the launcher they must meet the following:
        </div>
        <ul className="list-disc pl-4">
=======
      <h1 className="text-4xl font-bold mt-8 mb-2">Developers</h1>

      <div className="py-4 px-5 w-11/12 border rounded-md shadow-glow-2xl shadow-white/20">
        <div className="text-2xl font-bold">
          For a developer to be eligible to be on the launcher they must meet the following:
        </div>
        <ul className="list-disc pl-6">
>>>>>>> Stashed changes
          <li>
            At least 1 downloadable package available to the public (we do not display development groups that have not
            released)
          </li>
          <li>
            Ability to apply the appropriate GitHub task for package building to your aircraft's repo (we don't care if
            its open source)
          </li>
          <li>Comply with the style guide (found below, the standards are very lenient)</li>
        </ul>
      </div>
<<<<<<< Updated upstream
      <div className="w-11/12 border rounded-md overflow-x-scroll p-7 mt-7 mb-7 shadow-md shadow-white">
        <div className=" text-slate-200 text-xl">Style Guide</div>
=======
      <div className="py-4 px-5 w-11/12 border shadow-glow-2xl shadow-white/20 rounded-md my-2 overflow-x-auto">
        <div className="text-2xl font-bold">Style Guide</div>
>>>>>>> Stashed changes
        <div>
          When you submit a request to join the launcher, please include the desired style for your group's page:
          <SyntaxHighlighter language="ts">{code}</SyntaxHighlighter>
          <div className=" w-full flex flex-col items-center justify-center">
            <img
              src="https://cdn.discordapp.com/attachments/1228736837946704045/1228888293102452787/Untitled-1.png?ex=662dae68&is=661b3968&hm=e1ebf0bc71b05ef334810e66a2af02f14bc8ca59707bdf8e0250b9a3c699993a&"
              alt="style ref"
            />
            <img
              src="https://cdn.discordapp.com/attachments/1228736837946704045/1228889178310316074/Untitled-12png.png?ex=662daf3b&is=661b3a3b&hm=b644dfd593fe329ffcdce813c8567b4b5470aec1085fcd0f3503d0c25381d7ac&"
              alt="style ref home page"
            />
          </div>
        </div>
        <div></div>
      </div>
<<<<<<< Updated upstream
      <div className="w-11/12 p-3 border shadow-md shadow-white rounded-md mt-7 mb-7">
        <div className="text-xl">Simconnect:</div>
        <div>
          Some projects require the use of external systems, implementing these are very developer dependent however any
          developer group is welcome to modify backend functionality to accommodate their project's needs. If you are
          one of these projects, consult with Taco or Techno on discord for more details on how we would like you to
=======
      <div className="py-4 px-5 w-11/12 border shadow-glow-2xl shadow-white/20 rounded-md my-2">
        <div className="text-2xl font-bold">Simconnect</div>
        <div>
          Some projects require the use of external systems, implementing these are very developer dependent however any
          developer group is welcome to modify backend functionality to accommodate their project's needs. If you are
          one of these projects, consult with Taco or Techno on Discord for more details on how we would like you to
>>>>>>> Stashed changes
          implement new features.
        </div>
      </div>
    </div>
  )
}
