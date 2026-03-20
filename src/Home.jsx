import React, { useContext } from 'react'
import { BioContext } from './Context'

const Home = () => {

    const myName  = useContext(BioContext)
  return (
    <div>
      <h1>Hii from home {myName}</h1>
    </div>
  )
}

export default Home
