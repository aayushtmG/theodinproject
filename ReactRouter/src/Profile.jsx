import React from "react"
import { useParams } from "react-router-dom"
import Popeye from "./Popeye"
import Spinach from "./Spinach"
import DefaultProfile from "./DefaultProfile"

export default function Profile() {
  const { name } = useParams()
  return (
    <div>
      <h1>Hello from the profile page</h1>
      <p>How are you?</p>
      <hr />
      {name == "popeye" ? (
        <Popeye></Popeye>
      ) : name == "spinach" ? (
        <Spinach></Spinach>
      ) : (
        <DefaultProfile></DefaultProfile>
      )}
    </div>
  )
}
