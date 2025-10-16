import { useState, type FC, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {LogIn, LogOut, User} from 'lucide-react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Hamburger from 'hamburger-react'
import { useAuth } from '../../util/AuthContext'

type T_navbarProps = {
  buttons: T_navbarButtonProps[]
  opacity: number
}
type T_navbarButtonProps = {
  string: string
  to: string
}

export const Navbar: FC<T_navbarProps> = (props: T_navbarProps): JSX.Element => {
  const nav = useNavigate()
  const loc = useLocation()
  const { width } = useWindowDimensions()
  const {isAuthenticated, isLoading, loginWithRedirect, logout, user} = useAuth()

  const [hamburger, setHamburger] = useState<boolean>(false)
  const hamburgerMenuRef = useRef<HTMLDivElement>(null)
  const hamburgerButtonRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      hamburgerMenuRef.current !== null &&
      !hamburgerMenuRef.current.contains(event.target as Node) &&
      (hamburgerButtonRef.current === null || !hamburgerButtonRef.current.contains(event.target as Node))
    ) {
      setHamburger(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleNav = (to: string): void => {
    nav(to)
  }

  const getButtons = (): JSX.Element[] => {
    const buttons = props.buttons.map((button: T_navbarButtonProps, index: number) => {
      const isActive = loc.pathname === button.to
      return (
        <div
          className={`${isActive ? ' underline' : ''} button-bar-button text-xl `}
          key={index}
          onClick={() => {
            handleNav(button.to)
          }}
        >
          {button.string}
        </div>
      )
    })
    return buttons
  }

  const getAuthButton = (): JSX.Element => {
    if (isLoading) {
      return (
        <div className="text-sm text-white/60">Loading...</div>
      )
    }

    console.log(isAuthenticated, user)
    if (isAuthenticated && user) {
      return (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm" onClick={() => nav("/user")}>
            <User className="w-4 h-4" />
            <span className="hidden md:inline">{user.name || user.email}</span>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-sm"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      )
    }

    return (
      <button
        onClick={loginWithRedirect}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-sm font-semibold"
      >
        <LogIn className="w-4 h-4" />
        <span>Login</span>
      </button>
    )
  }

  const getHamburger = (): JSX.Element => {
    return (
      <div ref={hamburgerButtonRef}>
        <Hamburger toggled={hamburger} toggle={setHamburger} />
      </div>
    )
  }

  const hamburgerMenu = (): JSX.Element => {
    const buttons = props.buttons.map((button: T_navbarButtonProps, index: number) => {
      const isActive = loc.pathname === button.to
      return (
        <div
          className={`${isActive ? ' underline' : ''} button-bar-button text-xl `}
          key={index}
          onClick={() => {
            handleNav(button.to)
            setHamburger(false)
          }}
        >
          {button.string}
        </div>
      )
    })
    return (
      <div
        ref={hamburgerMenuRef}
        style={{ backdropFilter: 'blur(30px)' }}
        className="absolute top-20 bg-black/80 border-white border-b-2 w-screen flex items-center justify-center flex-col left-0 py-4"
      >
        {buttons}
        <div className="mt-4 w-full px-8">
          {getAuthButton()}
        </div>
      </div>
    )
  }

  const shouldShowHamburger: boolean = hamburger && width < 800

  return (
    <div
      style={{ backdropFilter: 'blur(30px)' }}
      className={`flex justify-between gap-10 items-center select-none flex-row w-screen p-5 pr-11 sticky top-0 left-0 h-20 border-b bg-black/${props.opacity}  z-50`} // make this background blur the content behind it, we need to add a psudo element most likely
    >
      <div
        onClick={() => {
          nav('/')
        }}
        className="flex flex-row items-center justify-center  gap-2 text-2xl font-bold"
      >
        <InfinityLogo />
        Infinity
      </div>
      <div className="flex flex-row items-center justify-center gap-9">
        {width < 800 ? getHamburger() :<>{getButtons()} {getAuthButton()}</> }
      </div>
      {shouldShowHamburger && hamburgerMenu()}
    </div>
  )
}

const InfinityLogo = (): JSX.Element => {
  return (
    <svg
      className="w-12"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.85))' }}
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
