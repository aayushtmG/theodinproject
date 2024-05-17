import ErrorPage from "./ErrorPage.jsx"
import Profile from "./Profile.jsx"
import App from "./App.jsx"
const routes = [
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "profile/:name", element: <Profile /> },
]

export default routes
