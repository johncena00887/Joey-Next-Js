import React from 'react'
import {animate, motion} from 'framer-motion'
import Skills from '../components/Skills'
import Image from 'next/image'


type Props = {}

const SkillsCards = (props: Props) => {
  return <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[450px] h-[450px] xl:w-[500px] snap-center bg-gray-500/30 p-10 opacity-80 hover:bg-indigo-600/60 '>
    <Image  className='relative rounded-full h-32 w-32 mx-auto ' src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />


<div>
<h1 className='text-4xl font-bold'> React.JS </h1>
</div>
</article>


  
}


export default SkillsCards