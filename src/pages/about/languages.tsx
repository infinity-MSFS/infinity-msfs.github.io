import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { CanvasRevealEffect } from '../../components/aceternity/canvasReveal'

export function LanguagesRust(): JSX.Element {
  return (
    <Card title="Rust backend" icon={<RustIcon />}>
<<<<<<< Updated upstream
      <CanvasRevealEffect animationSpeed={3} containerClassName="bg-black" colors={[[246, 76, 0]]} dotSize={2} />
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
=======
      <CanvasRevealEffect
        animationSpeed={3}
        showGradient={false}
        containerClassName="bg-black"
        colors={[[246, 76, 0]]}
        dotSize={2}
      />
      <div className="absolute inset-0 [mask-image:radial-gradient(300px_at_center,transparent,white)] bg-black/50 dark:bg-black/90" />
>>>>>>> Stashed changes
    </Card>
  )
}
export const LanguagesReact = (): JSX.Element => {
  return (
    <Card title="React frontend" icon={<ReactIcon />}>
<<<<<<< Updated upstream
      <CanvasRevealEffect animationSpeed={3} containerClassName="bg-black" colors={[[97, 218, 251]]} dotSize={2} />
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
=======
      <CanvasRevealEffect
        animationSpeed={3}
        showGradient={false}
        containerClassName="bg-black"
        colors={[[97, 218, 251]]}
        dotSize={2}
      />
      <div className="absolute inset-0 [mask-image:radial-gradient(300px_at_center,transparent,white)] bg-black/50 dark:bg-black/90" />
>>>>>>> Stashed changes
    </Card>
  )
}

export const Simconnect = (): JSX.Element => {
  return (
    <Card title="Simconnect Built in" icon={<AirplaneIcon />}>
<<<<<<< Updated upstream
      <CanvasRevealEffect animationSpeed={3} containerClassName="bg-black" colors={[[50, 150, 255]]} dotSize={2} />
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
=======
      <CanvasRevealEffect
        animationSpeed={3}
        showGradient={false}
        containerClassName="bg-black"
        colors={[[130, 155, 185]]}
        dotSize={2}
      />
      <div className="absolute inset-0 [mask-image:radial-gradient(300px_at_center,transparent,white)] bg-black/50 dark:bg-black/90" />
>>>>>>> Stashed changes
    </Card>
  )
}

<<<<<<< Updated upstream
export const CommunityFolder = () => {
  return (
    <Card title="Automatically locate Community Folder" icon={<FolderIcon />}>
      <CanvasRevealEffect animationSpeed={3} containerClassName="bg-black" colors={[[255, 150, 255]]} dotSize={2} />
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
=======
export const CommunityFolder = (): JSX.Element => {
  return (
    <Card title="Automatically locate Community Folder" icon={<FolderIcon />}>
      <CanvasRevealEffect
        animationSpeed={3}
        showGradient={false}
        containerClassName="bg-black"
        colors={[[155, 45, 250]]}
        dotSize={2}
      />
      <div className="absolute inset-0 [mask-image:radial-gradient(300px_at_center,transparent,white)] bg-black/50 dark:bg-black/90" />
>>>>>>> Stashed changes
    </Card>
  )
}

export const AutomaticUpdates = (): JSX.Element => {
  return (
    <Card title="Automatic Updates" icon={<SyncIcon />}>
<<<<<<< Updated upstream
      <CanvasRevealEffect animationSpeed={3} containerClassName="bg-black" colors={[[50, 150, 255]]} dotSize={2} />
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
=======
      <CanvasRevealEffect
        animationSpeed={3}
        showGradient={false}
        containerClassName="bg-black"
        colors={[[50, 150, 255]]}
        dotSize={2}
      />
      <div className="absolute inset-0 [mask-image:radial-gradient(300px_at_center,transparent,white)] bg-black/50 dark:bg-black/90" />
>>>>>>> Stashed changes
    </Card>
  )
}

<<<<<<< Updated upstream
export const FragmentedDownloads = () => {
  return (
    <Card title="Fragmented Downloads" icon={<FragmentIcon />}>
      <CanvasRevealEffect animationSpeed={3} containerClassName="bg-black" colors={[[50, 150, 255]]} dotSize={2} />
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
=======
export const FragmentedDownloads = (): JSX.Element => {
  return (
    <Card title="Fragmented Downloads" icon={<FragmentIcon />}>
      <CanvasRevealEffect
        animationSpeed={3}
        showGradient={false}
        containerClassName="bg-black"
        colors={[[255, 220, 45]]}
        dotSize={2}
      />
      <div className="absolute inset-0 [mask-image:radial-gradient(300px_at_center,transparent,white)] bg-black/50 dark:bg-black/90" />
>>>>>>> Stashed changes
    </Card>
  )
}

const Card = ({
  title,
  icon,
  children
}: {
  title: string
  icon: React.ReactNode
  children?: React.ReactNode
}): JSX.Element => {
  const [hovered, setHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => {
        setHovered(true)
      }}
      onMouseLeave={() => {
        setHovered(false)
      }}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-4 relative h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
<<<<<<< Updated upstream
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full text-wrap  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-center text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
=======
        <div className="text-center group-hover/canvas-card:-translate-y-0 group-hover/canvas-card:opacity-50 group-hover/canvas-card:scale-90 transition duration-200 w-full text-wrap  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2
          style={{ textShadow: 'black 2px 2px 0px, black 0px 0px 30px' }}
          className="dark:text-white p-4 text-2xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-center text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
>>>>>>> Stashed changes
          {title}
        </h2>
      </div>
    </div>
  )
}

const ReactIcon = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <g fill="#61DAFB">
        <circle cx="64" cy="64" r="11.4" />
        <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z" />
      </g>
    </svg>
  )
}

const RustIcon = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <path
        fill="#f64c00"
        d="M62.96.242c-.232.135-1.203 1.528-2.16 3.097-2.4 3.94-2.426 3.942-5.65.549-2.098-2.207-2.605-2.611-3.28-2.606-.44.002-.995.152-1.235.332-.239.18-.916 1.612-1.504 3.183-1.346 3.6-1.41 3.715-2.156 3.859-.46.087-1.343-.406-3.463-1.928-1.565-1.125-3.1-2.045-3.411-2.045-1.291 0-1.655.706-2.27 4.4-.78 4.697-.754 4.681-4.988 2.758-1.71-.776-3.33-1.411-3.603-1.411-.274 0-.792.294-1.15.653-.652.652-.653.655-.475 4.246l.178 3.595-.68.364c-.602.322-1.017.283-3.684-.348-3.48-.822-4.216-.8-4.92.15l-.516.693.692 2.964c.38 1.63.745 3.2.814 3.487.067.287-.05.746-.26 1.02-.348.448-.717.489-3.939.44-5.453-.086-5.762.382-3.51 5.3.717 1.56 1.304 2.979 1.304 3.149 0 .899-.717 1.225-3.794 1.728-1.722.28-3.218.51-3.326.51-.107 0-.43.235-.717.522-.937.936-.671 1.816 1.453 4.814 2.646 3.735 2.642 3.749-1.73 5.421-4.971 1.902-5.072 2.37-1.287 5.96 3.525 3.344 3.53 3.295-.461 5.804C.208 62.8.162 62.846.085 63.876c-.093 1.253-.071 1.275 3.538 3.48 3.57 2.18 3.57 2.246.067 5.56C-.078 76.48.038 77 5.013 78.877c4.347 1.64 4.353 1.66 1.702 5.394-1.502 2.117-1.981 2.999-1.981 3.653 0 1.223.637 1.535 4.441 2.174 3.205.54 3.919.857 3.919 1.741 0 .182-.588 1.612-1.307 3.177-2.236 4.87-1.981 5.275 3.311 5.275 4.929 0 4.798-.15 3.736 4.294-.8 3.35-.813 3.992-.088 4.715.554.556 1.6.494 4.87-.289 2.499-.596 2.937-.637 3.516-.328l.661.354-.178 3.594c-.178 3.593-.177 3.595.475 4.248.358.359.884.652 1.165.652.282 0 1.903-.631 3.604-1.404 4.22-1.916 4.194-1.932 4.973 2.75.617 3.711.977 4.4 2.294 4.4.327 0 1.83-.88 3.34-1.958 2.654-1.893 3.342-2.19 4.049-1.74.182.115.89 1.67 1.572 3.455 1.003 2.625 1.37 3.309 1.929 3.576 1.062.509 1.72.1 4.218-2.62 3.016-3.286 3.14-3.27 5.602.72 2.72 4.406 3.424 4.396 6.212-.089 2.402-3.864 2.374-3.862 5.621-.47 2.157 2.25 2.616 2.61 3.343 2.61.464 0 1.019-.175 1.23-.388.214-.213.92-1.786 1.568-3.496.649-1.71 1.321-3.2 1.495-3.31.687-.436 1.398-.13 4.048 1.752 1.56 1.108 3.028 1.959 3.377 1.959 1.296 0 1.764-.92 2.302-4.534.46-3.082.554-3.378 1.16-3.685.596-.302.954-.2 3.75 1.07 1.701.77 3.323 1.402 3.604 1.402.282 0 .816-.302 1.184-.672l.672-.67-.184-3.448c-.177-3.291-.16-3.468.364-3.943.54-.488.596-.486 3.615.204 3.656.835 4.338.857 5.025.17.671-.671.664-.818-.254-4.691-1.03-4.345-1.168-4.19 3.78-4.19 3.374 0 3.75-.048 4.18-.522.718-.793.547-1.702-.896-4.779-.729-1.55-1.32-2.96-1.315-3.135.024-.914.743-1.227 4.065-1.767 2.033-.329 3.553-.711 3.829-.96.923-.833.584-1.918-1.523-4.873-2.642-3.703-2.63-3.738 1.599-5.297 5.064-1.866 5.209-2.488 1.419-6.09-3.51-3.335-3.512-3.317.333-5.677 4.648-2.853 4.655-3.496.082-6.335-3.933-2.44-3.93-2.406-.405-5.753 3.78-3.593 3.678-4.063-1.295-5.965-4.388-1.679-4.402-1.72-1.735-5.38 1.588-2.18 1.982-2.903 1.982-3.65 0-1.306-.586-1.598-4.436-2.22-3.216-.52-3.924-.835-3.924-1.75 0-.174.588-1.574 1.307-3.113 1.406-3.013 1.604-4.22.808-4.94-.428-.387-1-.443-4.067-.392-3.208.054-3.618.008-4.063-.439-.486-.488-.48-.557.278-3.725.931-3.881.935-3.975.17-4.694-.777-.73-1.262-.718-4.826.121-2.597.612-3.027.653-3.617.337l-.67-.36.185-3.582.186-3.581-.67-.67c-.369-.369-.891-.67-1.163-.67-.27 0-1.884.64-3.583 1.422-2.838 1.306-3.143 1.393-3.757 1.072-.612-.32-.714-.637-1.237-3.829-.603-3.693-.977-4.412-2.288-4.412-.311 0-1.853.925-3.426 2.055-2.584 1.856-2.93 2.032-3.574 1.807-.533-.186-.843-.59-1.221-1.599-.28-.742-.817-2.172-1.194-3.177-.762-2.028-1.187-2.482-2.328-2.482-.637 0-1.213.458-3.28 2.604-3.249 3.375-3.261 3.374-5.65-.545C66.073 1.78 65.075.382 64.81.24c-.597-.321-1.3-.32-1.85.002m2.96 11.798c2.83 2.014 1.326 6.75-2.144 6.75-3.368 0-5.064-4.057-2.659-6.36 1.357-1.3 3.303-1.459 4.804-.39m-3.558 12.507c1.855.705 2.616.282 6.852-3.8l3.182-3.07 1.347.18c4.225.56 12.627 4.25 17.455 7.666 4.436 3.14 10.332 9.534 12.845 13.93l.537.942-2.38 5.364c-1.31 2.95-2.382 5.673-2.382 6.053 0 .878.576 2.267 1.13 2.726.234.195 2.457 1.265 4.939 2.378l4.51 2.025.178 1.148c.23 1.495.26 5.167.052 6.21l-.163.816h-2.575c-2.987 0-2.756-.267-2.918 3.396-.118 2.656-.76 4.124-2.219 5.075-2.378 1.551-6.305 1.27-7.97-.571-.256-.283-.753-1.704-1.106-3.16-1.03-4.253-2.413-6.64-5.193-8.964-.878-.733-1.595-1.418-1.595-1.522 0-.102.965-.915 2.145-1.803 4.298-3.24 6.77-7.012 7.04-10.747.519-7.126-5.158-13.767-13.602-15.92-2.002-.51-2.857-.526-27.624-.526-14.057 0-25.559-.092-25.559-.204 0-.263 3.124-3.295 4.964-4.816 5.054-4.178 11.618-7.465 18.417-9.221l2.35-.609 3.341 3.387c1.838 1.863 3.64 3.499 4.002 3.637M20.3 46.339c1.539 1.008 2.17 3.54 1.26 5.062-1.405 2.356-4.966 2.455-6.373.178-2.046-3.309 1.895-7.349 5.113-5.24m90.672.129c4.026 2.455.906 8.494-3.404 6.587-2.877-1.273-2.97-5.206-.155-6.641 1.174-.6 2.523-.578 3.56.054m-78.81 15.031v15.02h-13.28l-.526-2.285c-1.036-4.5-1.472-9.156-1.211-12.969l.182-2.679 4.565-2.047c2.864-1.283 4.706-2.262 4.943-2.625 1.038-1.584.94-2.715-.518-5.933l-.68-1.502h6.523v15.02M70.39 47.132c2.843.74 4.345 2.245 4.349 4.355.002 1.549-.765 2.52-2.67 3.38-1.348.61-1.562.625-10.063.708l-8.686.084v-8.92h7.782c6.078 0 8.112.086 9.288.393m-2.934 21.554c1.41.392 3.076 1.616 3.93 2.888.898 1.337 1.423 3.076 2.667 8.836 1.05 4.869 1.727 6.46 3.62 8.532 2.345 2.566 1.8 2.466 13.514 2.466 5.61 0 10.198.09 10.198.2 0 .197-3.863 4.764-4.03 4.764-.048 0-2.066-.422-4.484-.939-6.829-1.458-7.075-1.287-8.642 6.032l-1.008 4.702-.91.448c-1.518.75-6.453 2.292-9.01 2.819-4.228.87-8.828 1.163-12.871.822-6.893-.585-16.02-3.259-16.377-4.8-.075-.327-.535-2.443-1.018-4.704-.485-2.26-1.074-4.404-1.31-4.764-1.13-1.724-2.318-1.83-7.547-.674-1.98.439-3.708.796-3.84.796-.248 0-3.923-4.249-3.923-4.535 0-.09 8.728-.194 19.396-.23l19.395-.066.07-6.89c.05-4.865-.018-6.997-.229-7.25-.235-.284-1.486-.358-6.012-.358H53.32v-8.36l6.597.001c3.626.002 7.02.12 7.539.264M37.57 100.019c3.084 1.88 1.605 6.804-2.043 6.8-3.74-.001-5.127-4.881-1.94-6.826 1.055-.643 2.908-.63 3.983.026m56.48.206c1.512 1.108 2.015 3.413 1.079 4.949-2.46 4.035-8.612.828-6.557-3.418 1.01-2.085 3.695-2.837 5.478-1.531"
      />
    </svg>
  )
}

const AirplaneIcon = (): JSX.Element => {
  return (
    <svg className="w-32" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox=" 0  0 400 400">
      <defs id="defs4" />
      <g transform="translate(-147.06733,-109.44716)">
        <path
          d="M 157.98695,184.38488 L 173.37483,168.20017 C 182.38616,159.18884 197.56012,162.31477 197.56012,162.31477 L 242.58958,168.47612 L 265.39575,146.16045 C 277.41087,134.35989 288.26269,152.4142 283.54247,158.63631 L 271.83305,172.24635 L 320.32641,181.22794 L 336.78707,162.03882 C 354.38063,141.01237 367.47041,159.95529 359.53185,171.11218 L 348.89521,184.56906 L 421.75804,194.07153 C 484.40828,133.78139 509.98537,108.77262 526.46939,123.63021 C 543.05967,138.5836 513.71315,168.38877 456.64135,227.17701 L 467.00204,302.24678 L 482.26714,289.52597 C 491.27847,282.01653 507.27901,294.06392 490.75822,309.72648 L 469.76089,329.52825 L 478.61969,378.66527 L 491.73923,368.58052 C 503.32523,359.35463 517.39476,371.55518 501.7322,388.29052 L 480.88803,409.28786 C 480.02981,409.93153 487.69305,452.38631 487.69305,452.38631 C 492.41327,473.19821 480.67347,480.80195 480.67347,480.80195 L 466.35838,493.27782 L 411.97962,339.67439 C 407.47395,326.15738 396.0546,311.47862 376.97351,313.22076 C 366.8894,314.29354 341.41552,331.49026 337.98263,335.56682 L 279.00579,392.27531 C 277.5039,393.34809 288.07915,465.99635 288.07915,465.99635 C 288.07915,468.14191 269.38054,492.66454 269.38054,492.66454 L 232.01433,426.14725 L 213.56128,434.7301 L 224.35108,417.93211 L 157.06733,379.9526 L 182.29502,361.49956 C 194.31014,364.28878 257.3034,371.36975 258.59073,370.72608 C 258.59073,370.72608 309.88762,319.85344 312.81633,316.77643 C 329.76623,298.96831 335.46935,292.31456 338.04402,283.51778 C 340.6208,274.71377 336.23117,261.81195 309.62838,245.4769 C 272.93937,222.94855 157.98695,184.38488 157.98695,184.38488 z"
          id="path3166"
          fill="white"
        />
      </g>
    </svg>
  )
}

const FolderIcon = (): JSX.Element => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-36" version="1.1" viewBox="0 0 512 347.28">
      <path
<<<<<<< Updated upstream
        fill="white"
=======
        fill="rgb(155, 45, 250)"
>>>>>>> Stashed changes
        d="M121.35 118.09l260.64 0 0 -31.3c0.73,-7.76 -4.67,-9.69 -11.24,-9.98 -3.77,-0.18 -7.97,-0.2 -11.76,-0.01l-150.17 0c-36.03,0 -43.17,-19.04 -49.96,-37.13 -3.87,-10.32 -7.56,-20.17 -22.65,-20.17l-104.38 0c-6.76,0 -12.33,5.57 -12.33,12.33l0 253.04 61.44 -139.95c6.5,-14.82 24.13,-26.83 40.41,-26.83zm280.14 0l86.05 0c19.11,0 29.72,16.28 21.83,34.29l0.03 0.01 -73.77 168.06c-6.5,14.83 -24.14,26.83 -40.41,26.83l-366.19 0c-7.65,0 -13.84,-2.56 -18.08,-6.74 -6.2,-5.19 -10.95,-17.13 -10.95,-25.05l0 -283.66c0,-17.52 14.31,-31.83 31.83,-31.83l104.38 0c28.52,0 34.55,16.06 40.86,32.89 4.46,11.89 9.15,24.4 31.75,24.4 51.2,0 102.48,0.33 153.67,0.02 3.05,-0.03 6.18,-0.06 9.1,0.07 16.41,0.76 30.82,5.4 29.88,29.41l0.02 31.3zm85.97 19.05l-366.19 0c-8.66,0 -19,7.42 -22.44,15.25l-73.77 168.06 -0.03 -0.01c-2.05,4.68 -1.46,7.8 4.07,7.8l366.2 0c8.66,0 18.99,-7.43 22.43,-15.26l73.77 -168.06c0.07,0.03 4.09,-7.78 -4.04,-7.78z"
      />
    </svg>
  )
}

const SyncIcon = (): JSX.Element => {
  return (
    <svg className="w-36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
<<<<<<< Updated upstream
        fill="cyan"
=======
        fill="rgb(25, 150, 250)"
>>>>>>> Stashed changes
        d="M19.91,15.51H15.38a1,1,0,0,0,0,2h2.4A8,8,0,0,1,4,12a1,1,0,0,0-2,0,10,10,0,0,0,16.88,7.23V21a1,1,0,0,0,2,0V16.5A1,1,0,0,0,19.91,15.51ZM12,2A10,10,0,0,0,5.12,4.77V3a1,1,0,0,0-2,0V7.5a1,1,0,0,0,1,1h4.5a1,1,0,0,0,0-2H6.22A8,8,0,0,1,20,12a1,1,0,0,0,2,0A10,10,0,0,0,12,2Z"
      />
    </svg>
  )
}

const FragmentIcon = (): JSX.Element => {
  return (
    <svg
      className="w-36"
      viewBox="0 0 36 36"
      version="1.1"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="yellow"
        d="M33.53,18.76,26.6,15.57V6.43A1,1,0,0,0,26,5.53l-7.5-3.45a1,1,0,0,0-.84,0l-7.5,3.45a1,1,0,0,0-.58.91v9.14L2.68,18.76a1,1,0,0,0-.58.91v9.78h0a1,1,0,0,0,.58.91l7.5,3.45a1,1,0,0,0,.84,0l7.08-3.26,7.08,3.26a1,1,0,0,0,.84,0l7.5-3.45a1,1,0,0,0,.58-.91h0V19.67A1,1,0,0,0,33.53,18.76Zm-2.81.91L25.61,22,20.5,19.67l5.11-2.35ZM18.1,4.08l5.11,2.35L18.1,8.78,13,6.43ZM10.6,17.31l5.11,2.35L10.6,22,5.49,19.67Zm6.5,11.49-6.5,3-6.5-3V21.23L10.18,24A1,1,0,0,0,11,24l6.08-2.8ZM11.6,15.57h0V8l6.08,2.8a1,1,0,0,0,.84,0L24.6,8v7.58h0l-6.5,3ZM32.11,28.81l-6.5,3-6.51-3V21.22L25.19,24A1,1,0,0,0,26,24l6.08-2.8Z"
      />
    </svg>
  )
}

export const Icon = ({ className, ...rest }: any): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  )
}
