import React from 'react'
import Swiper from '../../Components/Swiper/Swiper'
import FirstSteps from '../../Components/FirstSteps/FirstSteps'
import Group from '../../Components/Group/Group'
import Education from '../../Components/Education/Education'

function Home() {
  return (
    <div>
        <Education/>
        <Group/>
        <Swiper/>
        <FirstSteps/>
    </div>
  )
}

export default Home