import { App } from './App.tsx'
import { Render } from './hooks/render.tsx'
import './index.scss'

// eslint-disable-next-line react-refresh/only-export-components
const Main = (): JSX.Element => {
  return (
    <div className=" text-red-300">
      <App />
    </div>
  )
}

Render(<Main />)
