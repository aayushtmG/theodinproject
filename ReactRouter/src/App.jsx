import "./App.css"
import { Link } from "react-router-dom"

export default function App() {
  return (
    <>
      <div>
        <h1>Hello from the main page of the app!</h1>
        <p>Here are some examples of links to other pages</p>
        <nav>
          <ul>
            <li>
              <Link to="profile">Profile Page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
