import Link from 'next/link';
import { motion } from 'framer-motion';
import { scale, slide } from '../animation';


export default function NavLink({data, isActive, setSelectedIndicator}: {
    data: {
        title: string,
        href: string,
        index: number,
    },
    isActive: boolean,
    setSelectedIndicator: (href: string) => void,
    
}) {
  
    const { title, href, index} = data;
  
    return (
      <motion.div 
        className="relative flex items-center"
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className="w-[10px] h-[10px] bg-background rounded-full absolute left-[-30px]">
        </motion.div>
        <Link href={href}>{title}</Link>
      </motion.div>
    )
}