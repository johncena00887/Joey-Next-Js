import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import SkillsCards from '../components/SkillsCards'


const Home = () => {
  return (
    <div className='bg-black text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Hello</title>
      </Head>

      <Header />


      {/*Hero*/}

      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      
    


      {/*About*/}
       
       
      <section id='about' className='snap-center'>
       <About />
      </section>





      {/*Skills*/}

      <section id='skills' className='snap-center'>
      <Skills />
      </section>

      


      {/*Projects*/}



      {/*Contact me*/}

</div>
  )
}

export default Home