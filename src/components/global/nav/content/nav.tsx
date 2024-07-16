
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import NavLink from './link';
import Footer from './footer';
import Curve from './curve';



interface Props {
  navItems: {
    title: string;
    href: string;
  }[]
}

const Nav = (props: Props) => {
  const { navItems } = props;
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className="h-[100vh] fixed right-0 top-0 text-background bg-gradient-to-l to-primaryVariant from-primary z-[500]"
      >
       <div className="h-[100%] p-[100px] flex flex-col justify-between">
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="flex flex-col text-[56px] gap-[12px] mt-[80px]">
                    <div className="border-b border-red-600 uppercase mb-[40px] text-[11px]">
                        <p>Navigation</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <NavLink
                        key={index} 
                        
                        data={{...data, index}} 
                        isActive={selectedIndicator == data.href} 
                        setSelectedIndicator={setSelectedIndicator}>
                        </NavLink>
                      })
                    }
            </div>
            <Footer />
        </div>
        <Curve />
    </motion.div>
  )
}

export default Nav