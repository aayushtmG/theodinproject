import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import routes from "./routes"

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
