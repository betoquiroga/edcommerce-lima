import { Outlet } from "react-router-dom"
import MainMenu from "../Elements/MainMenu"

const App = () => {
  return (
    <div>
      <MainMenu />
      <Outlet />
    </div>
  )
}

export default App
