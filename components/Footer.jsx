'use client'

import { fadeIn } from "@/variants"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"



const Footer = () => {
  return (
    <motion.footer 
      variants={fadeIn('up', 0.3)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.2 }}
      className='bg-footer bg-cover bg-no-repeat text-white pt-16'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-between xl:flex-row'>

          {/* logo */}
          <div className='w-[300px] mb-8 xl:mb-0'>
            <Link href='/'>
              <Image 
                src='/logo.svg'
                width={90}
                height={36}
                alt=''
              />
            </Link>
          </div>

          {/* grid items */}
          <div className='flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16'>
            {/* blog */}
            <div className=''>
              <h4 className='font-semibold mb-5'>blog</h4>
              <ul className='flex flex-col gap-y-6 text-sm'>
                <li>
                  <Link href='/'>
                    Lorem ipsum dolor sit amet consectetur.
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    Lorem ipsum dolor sit amet consectetur.
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    Lorem ipsum dolor sit amet consectetur.
                  </Link>
                </li>
              </ul>
            </div>

            {/* item */}
            <div className=''>
            <h4 className='font-semibold mb-5'>item</h4>
              <ul className='flex flex-col gap-y-6 text-sm'>
                <li>
                  <Link href='/'>
                    Lorem ipsum dolor sit amet consectetur.
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    Lorem ipsum dolor sit amet consectetur.
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    Lorem ipsum dolor sit amet consectetur.
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* socials */}
            <div className=' '>
              <h4 className='font-semibold mb-5'>Socials</h4>
              <ul className='flex flex-col gap-y-6 text-sm'>
                <li>
                  <Link href='/'>
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* copyright */}
          <div className='py-4 border-t border-white/10'>
            <p className='text-white/60 text-center text-sm'>
              Copyright &copy; W'Food 2023
            </p>
          </div>

        </div>
      </div>
    </motion.footer>
  )
}

export default Footer