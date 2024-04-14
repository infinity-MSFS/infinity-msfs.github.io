import { Meteors } from '../../components/aceternity/meteors'

const name: string = 'Infinity'
const greeting: string =
  'Welcome to Infinity, The ultimate aircraft package installer and launcher for MSFS, designed for ease of use for both developers and users.'

const InfinityLogo = (): JSX.Element => {
  return (
    <svg
      className="w-12"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
<<<<<<< Updated upstream
      style={{ filter: 'drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.85))' }}
=======
      style={{ filter: 'drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.85))', transform: 'scale(1.1)' }}
>>>>>>> Stashed changes
    >
      <path
        d="M280.8 728.9c-57.7 0.2-113.1-22.7-153.7-63.6-84.3-84.7-84.3-222.4-0.1-307 40.7-41 96.1-63.9 153.9-63.7 58.1 0 112.7 22.6 153.7 63.6L550 473.7c14 13.5 19.6 33.5 14.7 52.3-4.9 18.8-19.6 33.5-38.4 38.4-18.8 4.9-38.8-0.7-52.3-14.7L358.5 434.3c-41.5-41.5-113.9-41.5-155.3 0-42.5 42.9-42.5 112.1 0.1 155 41.2 41.2 113.7 41.4 155.1-0.1l14-14c21-21 55.1-21 76.1 0 21 21 21 55.1 0 76.1l-14 14c-40.7 40.9-96.1 63.8-153.7 63.6z m0 0"
        fill="white"
      />
      <path
        d="M743.1 728.9c-57.7 0.2-113-22.7-153.7-63.6L473.9 549.8c-14-13.5-19.6-33.5-14.7-52.3 4.9-18.8 19.6-33.5 38.4-38.4 18.8-4.9 38.8 0.7 52.3 14.7l115.5 115.5c41.5 41.6 113.9 41.5 155.3 0 42.5-42.9 42.5-112.1-0.1-155-41.2-41.3-113.7-41.4-155.1 0.1l-14 14c-21 21-55.1 21-76.1 0-21-21-21-55.1 0-76.1l14-14c40.7-40.9 96-63.8 153.7-63.6 58.1 0 112.7 22.6 153.7 63.6 84.3 84.7 84.3 222.4 0.1 307-40.7 40.8-96 63.8-153.8 63.6z m0 0"
        fill="white"
      />
    </svg>
  )
}

export const Home = (): JSX.Element => {
  return (
<<<<<<< Updated upstream
    <div className=" z-50 h-screen w-screen flex items-center justify-center overflow-hidden flex-col">
      <div className="flex flex-row">
        <InfinityLogo />
        <h1 className="text-4xl">{name}</h1>
=======
    // h-20 is set in the navbar, which = 5rem
    <div className="mt-[-5rem] z-50 h-screen w-screen flex items-center justify-center overflow-hidden flex-col">
      <div className="flex flex-row align-middle gap-2">
        <InfinityLogo />
        <h1 className="text-4xl font-bold">{name}</h1>
>>>>>>> Stashed changes
      </div>

      <div>{greeting}</div>
      <Meteors number={220} />
    </div>
  )
}
