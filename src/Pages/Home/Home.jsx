import React from 'react'
// import Swiper from '../../Components/Swiper/Swiper'
import Banner from '../../components/Banner/Banner'
import FirstSteps from '../../Components/FirstSteps/FirstSteps'
import Group from '../../Components/Group/Group'
import Education from '../../Components/Education/Education'
import WhyUs from '../../Components/WhyUs/WhyUs'
import Results from '../../Components/Results/Results'
import Get from '../../Components/get/Get'
import Course from '../../Components/Course/Course'
import About from '../../Components/about/About'
import Strategies from '../../Components/STRATEGIES/STRATEGIES'
import Str9 from '../../Components/Section9/Str9'

function Home() {
  return (
    <div>
      <Banner />
      <About/>
      <Course/>
      <Get/>
      <Strategies/>
      <Results/>
      <WhyUs />
      <Education />
      <Group />
      <Str9 />
      <FirstSteps />
    </div>
  )
}

export default Home