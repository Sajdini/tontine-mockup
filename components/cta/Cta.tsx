import React from 'react'
import './Cta.css'
import Link from 'next/link'
const Cta = () => {
  return (
    <section className='cta-section '>
        <div className='cta-items__container'>
        <h1 className='cta-title'>A piece of my work</h1>
        <p className='cta-paragraph' >If you are interested and want to check out my projects, feel free to click on the link below </p> 
        <Link href='/projects' className='cta-link'>Go to projects &#8594;</Link>
        </div>
    </section>
  )
}

export default Cta