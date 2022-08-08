import React from 'react'
import TabPanel from '../../Components/Upcoming/Upcoming'
import Slider from '../../Components/Slider/Slider'
import ModalVideoButton from '../../Components/ModalVideoButton/ModalVideoButton'
// import Upcoming from '../../Components/Upcoming/Upcoming'
import '../Home/Home.scss'
import Services from '../../Components/Services/Services'
import OnlineStreaming from '../../Components/OnlineStreaming/OnlineStreaming'


function Home() {
  return (
    <div className='slider'>
      <Slider/>
      <TabPanel/>
      <Services/>
      <OnlineStreaming/>
      {/* <ModalVideoButton/> */}
    </div>
     
  )
}

export default Home