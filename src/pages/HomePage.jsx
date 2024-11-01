import React from 'react'
import Carousels from '../components/Carousels'
import MultipleCarousels from '../components/MultipleCarousels'
import Features from '../components/Features'
import OurTeam from '../components/OurTeam'

const HomePage = () => {
  return (
    <div>
        <Carousels />
        <MultipleCarousels />
        <Features />
        <OurTeam />
    </div>
  )
}

export default HomePage