import React from 'react'
import ContactHero from '../contactItems/ContactHero'
import Services from '../shopItems/Services'

function Contact() {
  return (

    <>
    <div className='flex gap-5 flex-col'>
       <ContactHero/>
       <Services/>
    </div>
</>
    )
}

export default Contact