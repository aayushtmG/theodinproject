import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default App
