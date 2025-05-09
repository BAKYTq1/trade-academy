import React from 'react'
import Swiper from '../../Components/Swiper/Swiper'
import Banner from '../../components/Banner/Banner'
import FirstSteps from '../../Components/FirstSteps/FirstSteps'
import Group from '../../Components/Group/Group'
import Education from '../../Components/Education/Education'
import WhyUs from '../../Components/WhyUs/WhyUs'
import Results from '../../Components/Results/Results'
import STRATEGIES from '../../Components/STRATEGIES/STRATEGIES'
import Get from '../../Components/get/Get'
import Course from '../../Components/Course/Course'
import About from '../../Components/about/About'

function Home() {
  return (
    <div>
      <Banner />
      <About/>
      <Course/>
      <Get/>
      <STRATEGIES/>
      <Results/>
      <WhyUs />
      <Education />
      <Group />
      <Swiper />
      <FirstSteps />
    </div>
  )
}

export default Home