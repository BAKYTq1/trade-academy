import React from 'react'
import Swiper from '../../Components/Swiper/Swiper'
import Banner from '../../components/Banner/Banner'
import FirstSteps from '../../Components/FirstSteps/FirstSteps'

function Home() {
  return (
    <div>
      <Banner/>
        <Swiper/>
        <FirstSteps/>
    </div>
  )
}

export default Home