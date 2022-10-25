import React from 'react'
import {animate, motion} from 'framer-motion'
import SkillsCards from './SkillsCard'
import SkillsCard from './SkillsCard'
import SkillsCard2 from './SkillsCard2'
import SkillsCard3 from './SkillsCard3'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
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
  className=' min-h-screen p-20 flex items-center overflow-hidden flex-col space-y-[-100px]' >
  <h3 className='text-center uppercase text-gray-500 tracking-[15px] z-1'>Skills</h3>


  <div className='w-screen overflow-y-hidden flex space-x-4 overflow-x-scroll p-20 snap-x snap-mandatory scrollbar scrollbar-track-gray-500/10 scrollbar-thumb-indigo-600 '>
  <SkillsCard />
  <SkillsCard2 />
  <SkillsCard3 />




  </div>

 
</motion.div>




  )
}

export default Skills