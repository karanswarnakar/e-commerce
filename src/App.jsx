import React from 'react'
import TopNavbar from './components/Nabars/TopNavbar'
import Navbar from './components/Nabars/Navbar'
import Catagory from './components/Section/Catagory'
import Section1 from './components/Section/Section1'
import Section2 from './components/Section/Section2'

const App = () => {
  return (
    <div>
      <TopNavbar />
      <Navbar />
      <Catagory />
      <Section1 />
      <Section2 />
    </div>
  )
}

export default App
