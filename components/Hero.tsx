import React from 'react'
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link';

type Props = {}

function Hero({}:Props) {
    const [text] = useTypewriter({
        words: ['Hello', 'My Name is Joey Wehbe', 'Im a Front-End Dev', 'Welcome To My Website!'],
        loop:true,
        onLoopDone: () => console.log(`loop completed after 3 runs.`),
        
      })
    
      return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
          <BackgroundCircles />
       
          <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
          src="https://i1.sndcdn.com/avatars-so6QwChqpPETtfXm-36IUkg-t500x500.jpg"/>



          <div className='z-20'>
          <h2 className='text-sm uppercase text-white-500 pb-2 tracking-[15px] z-1'>Web Developer</h2>
          <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='purple' />
          </h1>



          <div className='pt-5'>
          <Link href="#about">
            <button className='heroButton border-none'>About</button>
          </Link>
            
           

          <Link href="#skills">
            <button className='heroButton border-none'>Skills</button>
          </Link>
            
           

            <Link href="#projects">
            <button className='heroButton border-none'>Projects</button>
            </Link>
            


      
           </div>
           </div>
        </div>
      )
    }

    export default Hero