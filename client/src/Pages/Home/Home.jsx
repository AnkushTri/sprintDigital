import React from 'react'
import HeroSection from '../../Components/HeroSection'
import Services from '../../Components/Services/Services'
import Works from '../../Components/Works/Works'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Contacts from '../../Components/Contacts/Contacts'

const Home = () => {
  return (
    <div className='pt-[5%]'>
        <HeroSection/>
        <Services/>
        <Works/>
        <AboutUs/>
        <Contacts/>
     </div>
  )
}

export default Home