import React from 'react'
import About from '../../components/about/Aboutt'
import Course from '../../components/BlockCourse/Courses'
import Get from '../../Components/get/Get'
import Strategies from '../../components/BlockSTRATEGIES/STRATEGIE'
import FirstSteps from '../../Components/FirstSteps/FirstSteps'
import Str9 from '../../components/Section9/Str9'
import Tarif from '../../components/Block6/Tarif'
import ChartSection from '../../components/Blocck6/ChartSection'
import Results from '../../components/block7/Result'
import Banner from '../../components/Ba/Block1'

function Home() {
  return (
    <div>
      <Banner/>
      <About/>
      <Course/>
      <ChartSection/>
      <Get/>
      <Strategies/>
      <Results/>
      <Tarif/>
      <Str9 />
      <FirstSteps/>
    </div>
  )
}

export default Home