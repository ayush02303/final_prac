import React from 'react'
import { Route, Routes } from 'react-router-dom'
import First from '../src/first'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/first' element = { <First/>}/>
        </Routes>
      
    </div>
  )
}

export default Routing
