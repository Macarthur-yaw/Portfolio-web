import Mticon from '../assets/Union.png'
import Discord from '../assets/Discord.png'
import Github from '../assets/Vector.png'
import {AnimatePresence, motion} from 'framer-motion'
import lineStroke from '../assets/Line 10 (Stroke).svg'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'
export default function Navbar(){
    const[active,setActive]=useState<boolean>(false)
    
    function handleButtonClick(){
        setActive(true)
    }
    return (
        <div>
        <nav className={`flex md:w-[80%] px-4 w-full top-0   left-1/2 transform -translate-x-1/2 
        z-20 bg-[#282C33] fixed ${active  && '    flex flex-row '}
        flex-row  justify-between  md:px-4 py-2 `}>
<span className="text-white inline-flex items-center gap-2">
<img src={Mticon} className='w-[16px] h-[16px]'/>    MacArthur
</span>
<motion.div 
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.5}}
className='p-2  ml-auto m md:hidden'>


{
    active ? <CloseIcon
onClick={
    ()=>setActive(false)
}
className='cursor-pointer text-white mr-auto '/>
:<DehazeIcon onClick={handleButtonClick} className='text-white cursor-pointer ' />  

}
</motion.div>
<AnimatePresence>
  
{
    active && (
        <div
        >
      {/* <span className='relative'> */}
      
      {/* </span> */}
             <motion.ul
             
             className='list-none  text-[#ABB2BF] font-medium flex mt-10 py-10 z-2 fixed items-start px-6 bg-[#282C33] h-screen  w-full    left-0 top-0  flex-col  gap-10 justify-between'>
    <span className='flex flex-col gap-12'>
        <li className="text-[#ABB2BF] hover:text-gray-400 text-[40px]">
            {/* {active && console.log('clicked')} */}
            <span className='text-[#C778DD]'>
            #
            </span> home
        </li>
        
<Link to='/project'>        <li className="text-[#ABB2BF] hover:text-gray-400 text-[40px]">
        <span className='text-[#C778DD]'>
            #
            </span> works
        </li></Link>
        <Link to='/about'>
        <li className="text-[#ABB2BF] hover:text-gray-400 text-[40px]">
        <span className='text-[#C778DD]'>
            #
            </span> about-me
        </li></Link>
        <Link to='/skills'>
        <li className="text-[#ABB2BF] hover:text-gray-400 text-[40px]">
        <span className='text-[#C778DD]'>
            #
            </span> contacts
        </li>    </Link>
        </span> 
        <span className='flex flex-row mb-6 items-center gap-4  mx-auto'>
            <img src={Discord} alt='discord' className='w-[64px] h-[64px]'/>
            <img src={Github} alt='Githhub' className='w-[64px] h-[64px]'/>
        </span>
           </motion.ul>
        </div>
    )
}      </AnimatePresence>
  
<span className={`${active ? 'block':'hidden'} hidden md:block`}>
    <ul className="flex flex-row gap-4 p-2 ">
        <li className="text-white hover:text-gray-400 text-[16px]">
            {/* {active && console.log('clicked')} */}
            <span className='text-[#C778DD]'>
            #
            </span>
            home
        </li>
        
        <li className="text-white hover:text-gray-400 text-[16px]">
        <span className='text-[#C778DD]'>
            #
            </span>works
        </li>
        
        <li className="text-white hover:text-gray-400 text-[16px]">
        <span className='text-[#C778DD]'>
            #
            </span>about-me
        </li>
        
        <li className="text-white hover:text-gray-400 text-[16px]">
        <span className='text-[#C778DD]'>
            #
            </span>contacts
        </li>
    </ul>
</span>
        </nav>

<nav className='fixed hidden md:block gap-2 p-2  md:flex-col left-0 top-[-300px]'>
<img src={lineStroke} className='h-[500px] '/>
<motion.img
initial={{scale:1}}

whileHover={{scale:1.2}}
transition={{duration:0.3}}
src={Discord} className='w-[32px] cursor-pointer h-[32px]'>
    </motion.img>


    <motion.img
initial={{scale:1}}

whileHover={{scale:1.2}}
transition={{duration:0.3}}
src={Github} className='w-[32px] cursor-pointer h-[32px]'>
    </motion.img>
</nav>


        </div>   )
}