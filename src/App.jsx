
import './App.css'
import First from './first'
import Second from './Second'
import Third from './Third'
import Button from './Button'
import State from './State'
import Fourth from './Fourth'
import Final from './Final'
import LiftingtheStateUp from './LiftingtheStateUp'
import TimeShow from './TimeShow'
import CleanUp from './CleanUp'
import DocTitle from './DocTitle'
import Pokemon from './Pokemon'
import Context from './Context'
import Home from './Home'
import DarkLightModeSwitch, { DarkLight } from './DarkLightModeSwitch'
import Reducer from './Reducer'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Movie from './Movie'
import { useEffect } from 'react'
import { getPost } from './api/PostApi'
import Posts from '../components /Posts'
import Routing from '../components /Routing'




// const router = createBrowserRouter([
//   {
//     path : "/", 
//     element : <First/>
//   }, 

//   {
//     path : "/Final", 
//     element : <Final/>
//   }
// ])



function App() {


  return(
    <>
    <h1>App functioning</h1>
    </>
  )
}

export default App
