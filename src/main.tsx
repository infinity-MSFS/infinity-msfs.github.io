import { HashRouter } from 'react-router-dom'
import { App } from './components/app/app.tsx'
import { Render } from './hooks/render.tsx'
import './index.scss'

// eslint-disable-next-line react-refresh/only-export-components
const Main = (): JSX.Element => {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}

Render(<Main />)
