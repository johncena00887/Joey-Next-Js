import React from 'react'
import {animate, motion} from 'framer-motion'
import { useTypewriter, Cursor} from 'react-simple-typewriter'

type Props = {}

const About = (props: Props) => {
    const [text] = useTypewriter({
        words: ['Background Story'],
        loop:false,
        
    })
    
  return (
  <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px10 justify-evenly mx-auto items-center '> 
  <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
 
 <motion.img className='-mb-36 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-54 md:h-54 xl:w-[400px] xl:h-[400px] '
 initial={{
    x: -200,
}}
whileInView={{
    x: 0,
}}
viewport={{
once:true,
 }}
transition={{
duration:1.2,
 }}
src='https://i1.sndcdn.com/avatars-so6QwChqpPETtfXm-36IUkg-t500x500.jpg'>
</motion.img>


<div className='space-y-10 px-0 md:px-10'>
<h1 className='text-3xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='purple' />
          </h1>
    


    <p className='text-sm'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>




    </div>
</div>
  )
}

export default About