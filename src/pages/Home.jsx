import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ComprehensiveSolutions from '../components/ComprehensiveSolutions'
import GetInTouch from '../components/GetInTouch'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <ComprehensiveSolutions/>
        <GetInTouch/>
        <Footer/>
    </div>
  )
}

export default Home