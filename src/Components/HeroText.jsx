import React from 'react'
import logoSmall from '../Assets/logoSmall.png'

function HeroText() {
  return (
    <div className='heroText'>
        <img src={logoSmall} alt="small logo" className='logoSmall' />
        <div className='heroText1'>TAILORED DAILY SUPPLEMENT SERVINGS</div>
        <div className='heroText2'>THE GAME HAS CHANGED</div>
    </div>
  )
}

export default HeroText