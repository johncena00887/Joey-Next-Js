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
  <div className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto text-center items-center'> 
  <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl lg:text-2xl md:text-2xl xl:text-2xl text-center'>About</h3>
 
 <motion.img className='-mb-32 md:mb-0 rounded-full h-[130px] w-[130px] md:rounded-lg md:w-54 md:h-54 xl:w-[400px] xl:h-[400px] items-center '
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
<h1 className='text-xs md:text-3xl lg:text-6xl font-semibold px-20 text-center lg:text-left xl:text-left md:text-left'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='purple' />
          </h1>
    


    <p className='text-sm'>survived not only five centuries, but also fuck you bitch horny little fuck the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>




    </div>
</div>
  )
}

export default About