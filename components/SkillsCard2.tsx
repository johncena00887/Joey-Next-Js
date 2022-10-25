import React from 'react'
import {animate, motion} from 'framer-motion'
import Skills from './Skills'



type Props = {}

const SkillsCard2 = (props: Props) => {
  return <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[450px] h-[450px] xl:w-[500px] snap-center bg-gray-500/30 p-10 opacity-80 hover:bg-gray-600/60 '>
    <img  className='h-33 w-32 my-20 ' src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png" />

    <div className="flex justify-between mb-1">
  <span className="text-sm font-medium text-blue-700 dark:text-white ">Next.JS</span>
</div>



</article>


  
}


export default SkillsCard2