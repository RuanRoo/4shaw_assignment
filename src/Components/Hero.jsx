import React from 'react'
import Hero1 from '../Assets/Banner1.png'
import Header from './Header'
import HeroText from './HeroText'

function Hero() {
  return (
    <div className='heroContainer'>
        <Header />
        <img src={Hero1} alt="Hero 1" className='heroImage' />
        <HeroText />
    </div>
  )
}

export default Hero