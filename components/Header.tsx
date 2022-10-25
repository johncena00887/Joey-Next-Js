import React from 'react'
import {SocialIcon} from 'react-social-icons'
import {animate, motion} from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
<header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 items-center'>

<motion.div
    initial={{
        x: -500,
        opacity:0,
        scale:0.5
         }}

        animate={{
            x: 0,
            opacity:1,
            scale:1
         }}

    transition={{
        duration:1.5,

         }}


    /*social icons*/
    className='flex flex-row items-center'>
    <SocialIcon url="https://www.instagram.com/joeywehbe_" fgColor='grey' bgColor='transparent'/>
    <SocialIcon url="https://www.facebook.com/wehbejoey" fgColor='grey' bgColor='transparent'/>
    <SocialIcon url="https://www.twitter.com/joeywehbe_" fgColor='grey' bgColor='transparent'/>
</motion.div>

{/*get in touch*/}
<motion.div
initial={{
    x:500,
    opacity:0,
    scale:0.5,
}}

animate={{
    x:0,
    opacity:1,
    scale:1
}}

transition={{
    duration:1.5,
}}

className='flex flex-row items-center text-gray-500 cursor-pointer '>

    <p className='uppercase hidden md:inline-flex text-sm text-gray-500'> Get In Touch! </p>
</motion.div>
   </header>
  )
}

export default Header