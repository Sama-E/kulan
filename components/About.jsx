'use client';
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

const About = () => {
  return (
    <section className='grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 item-center' id='about'>
      {/* text */}
      <motion.div 
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2 }}
        className='xl:pl-[135px]'
      >
        <h1 className='mb-9'>Let's Talk About W'Food</h1>
        <p className='mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores pariatur autem, error suscipit neque rerum similique quod ut deserunt, assumenda totam architecto repellendus cupiditate? Pariatur quas modi alias porro qui.</p>
        <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores pariatur autem, error suscipit neque rerum similique quod ut deserunt, assumenda totam architecto repellendus cupiditate? Pariatur quas modi alias porro qui.</p>
        <Button>Read More</Button>
      </motion.div>
      
      {/* img */}
      <motion.div
        variants={fadeIn('left', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.2 }}
      >
        <Image 
          src='/about/img.png'
          width={705}
          height={771}
          alt=''
          className='hidden xl:flex'
        />
      </motion.div>
    </section>
  )
}

export default About