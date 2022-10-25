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
  className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center text-center' >
  <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-1xl lg:text-2xl md:text-2xl xl:text-2xl text-center'>Skills</h3>


  <div className='w-full overflow-y-hidden flex space-x-4 overflow-x-scroll p-20 snap-x snap-mandatory scrollbar scrollbar-track-gray-500/10 scrollbar-thumb-indigo-600 '>
  <SkillsCard />
  <SkillsCard2 />
  <SkillsCard3 />




  </div>

 
</motion.div>




  )
}

export default Skills