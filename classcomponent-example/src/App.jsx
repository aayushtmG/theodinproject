import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import ClassInput from "./components/classcomponent"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Class Based Component</h1>
      <ClassInput />
    </>
  )
}

export default App
