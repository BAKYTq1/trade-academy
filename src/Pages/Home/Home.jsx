import React from 'react'
import FirstSteps from '../../Components/FirstSteps/FirstSteps'
import Results from '../../components/blockresult/Result'
import Get from '../../Components/get/Get'
import Course from '../../components/BlockCourse/Courses'
import About from '../../components/about/Aboutt'
import Strategies from '../../components/BlockSTRATEGIES/STRATEGIE'
import Str9 from '../../Components/Section9/Str9'
import Tarif from '../../components/Tarif/Tariff'
import ChartSection from '../../components/BlockChartSection/ChartSection'
import Banner from '../../components/Banner/Index'

function Home() {
  return (
    <div>
      <Banner />
      <About/>
      <Course/>
      <ChartSection/>
      <Get/>
      <Strategies/>
      <Results/>
      <Tarif/>
      <Str9 />
      <FirstSteps />
    </div>
  )
}

export default Home