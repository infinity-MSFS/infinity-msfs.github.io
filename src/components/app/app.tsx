import { Route, Routes, useLocation } from 'react-router-dom'
import { About } from '../../pages/about/about'
import { Home } from '../../pages/home/home'
import { Navbar } from '../navbar/navbar'
import { Developers } from '../../pages/developers/developers'
import { useEffect } from 'react'

export const App = (): JSX.Element => {
  const loc = useLocation()

  useEffect(() => {
    if (loc.pathname === '/') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [loc.pathname])

  return (
    <>
      <Navbar
        buttons={[
          { string: 'Home', to: '/' },
          { string: 'About', to: '/about' },
          { string: 'Developers', to: '/developer' }
        ]}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/developer" element={<Developers />} />
      </Routes>
    </>
  )
}
