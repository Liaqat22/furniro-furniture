import React from 'react'
import Services from '../shopItems/Services'
import AboutHero from '../aboutItems.js/AboutHero'

function About() {
  return (
    <div className='flex gap-5 flex-col'>
      <AboutHero />
      <Services />
    </div>
  )
}

export default About