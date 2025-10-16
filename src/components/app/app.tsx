import { Route, Routes, useLocation } from 'react-router-dom'
import { About } from '../../pages/about/about'
import { Home } from '../../pages/home/home'
import { Navbar } from '../navbar/navbar'
import { Developers } from '../../pages/developers/developers'
import { useEffect } from 'react'
import { BackgroundGradientAnimation } from '../aceternity/gradientAnimation'
import { T38ProductPage } from '../../pages/aircraft/aircraft'
import { AuthProvider } from '../../util/AuthContext'
import { UserDashboard } from '../../pages/user/User'

export const App = (): JSX.Element => {
  const loc = useLocation()

  useEffect(() => {
    if (location.hash === '#/') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [loc.hash])

  return (
    <>
    <AuthProvider>
      <BackgroundGradientAnimation interactive={false}>
        <div className="h-screen w-screen dark:bg-black/90  dark:bg-dot-white/[0.2] overflow-y-auto overflow-x-hidden bg-dot-black/[0.2] relative ">
          {location.hash !== '#/' && (
            <Navbar
              opacity={90}
              buttons={[
                { string: 'Home', to: '/' },
                { string: 'Aircraft', to: '/aircraft' },
                { string: 'Launcher', to: '/about' },
                { string: 'Developers', to: '/developer' },
              ]}
            />
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/developer" element={<Developers />} />
            <Route path="/aircraft" element={<T38ProductPage />} />
            <Route path="/user" element={<UserDashboard />} />
          </Routes>
        </div>
        
      </BackgroundGradientAnimation>
      </AuthProvider>
    </>
  )
}
