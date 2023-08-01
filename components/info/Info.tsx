import React from 'react'
import "./Info.css"
import Image from 'next/image'

const Info = () => {
  return (
    <section className='info-section '>
        <div className='info-items__container ' >
        <h2 className='info-title'>More About Me</h2>
        <div className='flex-container'>
        <div className='paragraph-container'>
        <p >I am a develoepr with over 3 years of experience. I have worked as an employee and as a freelance developer, and i have gained experience of various front end tech stacks, and lately back end as well</p>

        <p>I am a develoepr with over 3 years of experience. I have worked as an employee and as a freelance developer, and i have gained experience of various front end tech stacks, and lately back end as well</p>
        </div>
        <Image width={300} height={300} src='/project.jpg' alt='Authors image' className='info-image'/>
        </div>
        </div>
    </section>
  )
}

export default Info