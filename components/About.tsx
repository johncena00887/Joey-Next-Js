import React from 'react'
import {animate, motion} from 'framer-motion'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

type Props = {}

const About = (props: Props) => {
    const [text] = useTypewriter({
        words: ['Background Story'],
        loop:true,
        
    })
    
  return (
  <div className='min-h-screen flex items-center overflow-hidden flex-col p-20 space-y-[-150px]'> 
  <h3 className='mb-56 text-center uppercase text-gray-500 tracking-[15px]'>About</h3>
 <div className='space-y-0 px-0 md:px-0'>
<h1 className=' text-md md:text-3xl lg:text-6xl font-semibold lg:text-left xl:text-left md:text-left'>
          <span className='mr-1'>{text}</span>
          <Cursor cursorColor='purple' />
          </h1>
         <div>
        <p className='text-lg'>Im a self learned UI Designer and Front-End / Smart Contract Developer from Lebanon, Beirut. Years of experiences in HTML, React, Next.js, CSS, Javascript, Typescript. Dedicated effort with full-time - Always can work in your time zone. - Comply with the deadline. Perfect satisfaction with your project. - Best result with high quality and high speed</p>

        </div>   
     </div>
</div>
  )
}

export default About