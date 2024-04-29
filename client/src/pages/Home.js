import React from 'react'
import { useContext } from 'react'
import { Appstate } from '../App'
function Home() {
  const {user} = useContext(Appstate)
  return (
    <div>
       <h1>Home</h1>
       <br />
       <br />
       <br />
       <br />
       <br />
       <h2>Wellcome {user.username}</h2>
    </div>
  )
}

export default Home
