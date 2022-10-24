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
  className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px10 justify-evenly mx-auto items-center' >
  <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>


  <div className='flex space-x-4 overflow-x-scroll p-20 snap-x snap-mandatory scrollbar scrollbar-track-gray-500/10 scrollbar-thumb-indigo-600'>
  <SkillsCard />
  <SkillsCard2 />
  <SkillsCard3 />




  </div>

 
</motion.div>




  )
}

export default Skills