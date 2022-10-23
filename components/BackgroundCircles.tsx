import React from 'react'
import {animate, motion} from 'framer-motion'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (

 <motion.div
    initial={{
        opacity:0,
     
    }} 

    animate={{
    opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
    scale:[1,2,2,3,1]
   
    }}

    transition={{
        duration: 2.5,
    }}
              className='relative flex justify-center items-center'>
         <div className='absolute border [#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
         <div className='absolute rounded-full border border-cyan-50 [#333333] h-[300px] w-[300px] mt-52 opacity-20'/>
         <div className='absolute rounded-full border border-[#424346] h-[400px] w-[400px] mt-52'/>
         <div className='rounded-full border border-[#97939a] opacity-20 h-[500px] w-[500px] mt-52 absolute animate-pulse '/>
         <div className='rounded-full border border-[#484549] h-[600px] w-[600px] mt-52 absolute'/>
    </motion.div>
  )
}

export default BackgroundCircles