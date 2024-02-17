"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {Link as ScrollLink} from 'react-scroll';

import Nav from './Nav';
import NavMobile from './NavMobile';
import { Button } from "./ui/button";
import { Sorts_Mill_Goudy } from "next/font/google";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setActive(window.scrollY > 100);
    };

    // add event listener
    window.addEventListener('scroll', handleScroll);

    // clear event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={`${active ? 'bg-black-heavy py-4' : 'bg-none py-8'} fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}>
      <div className="container mx-auto">
      {/* logo, nav, btn */}

        <div className="flex items-center justify-between" >
          {/* logo */}
          <Link href='/'>
            <Image src='/logo.svg' width={75} height={30} alt='' />
          </Link>

          {/* nav */}
          <Nav />

          {/* btn */}
          <ScrollLink to='reservation' smooth={true}>
            <Button variant='orange' size='sm'>Book a table</Button>
          </ScrollLink>

          {/* mobileNav */}
          <NavMobile />

        </div>
      </div>
    </header>
  )
}

export default Header;