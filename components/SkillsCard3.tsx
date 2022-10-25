import React from 'react'
import {animate, motion} from 'framer-motion'
import Skills from './Skills'



type Props = {}

const SkillsCard3 = (props: Props) => {
  return <article className='mt-24  lg:mt-40 xl:mt-20 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[450px] h-[450px] xl:w-[500px] snap-center bg-gray-500/30 p-10 opacity-80 hover:bg-gray-600/60 '>
    <img  className=' h-[77px] w-[77px] my-20' src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" />


    <div className="flex justify-between mb-1">
  <span className="text-sm font-medium text-blue-700 dark:text-white">TypeScript</span>
</div>


</article>


  
}


export default SkillsCard3