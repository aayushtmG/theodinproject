import "./App.css"
import { useState } from "react"

function App() {
  return (
    <>
      <header>React Javascript</header>
      <Form></Form>
    </>
  )
}
function Form() {
  const [value, setValue] = useState("")

  const inputStyle = {
    color: "white",
  }
  return (
    <>
      <form>
        <h1>{value}</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          style={inputStyle}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  )
}

export default App
