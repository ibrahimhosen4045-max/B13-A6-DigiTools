
import { useState } from 'react'
import './App.css'
import Footer from './Componenet/Footer'
import Hero from './Componenet/Hero'
import Navber from './Componenet/Navber'
import Pricing from './Componenet/Pricing'
import RattingSec from './Componenet/RattingSec'
import ToolsSec from './Componenet/ToolsSec'
import Workflow from './Componenet/Workflow'
import Home from './mainFunctionComponent/Home'


function App() {
  const [data, setData] = useState([])

const receiveData = (value) => {
  setData(value)
}

  return (
    <>
      <Navber data = {data}></Navber>
      <Hero></Hero>
      <RattingSec></RattingSec>
      <Home sendData = {receiveData}></Home>
      
      <ToolsSec></ToolsSec>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  )
}

export default App
