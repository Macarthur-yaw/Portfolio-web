import Mticon from '../assets/Union.png'
import Discord from '../assets/Discord.png'
import Github from '../assets/Vector.png'
import {motion} from 'framer-motion'
import lineStroke from '../assets/Line 10 (Stroke).svg'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useState } from 'react'
export default function Navbar(){
    const[active,setActive]=useState<boolean>(false)
    
    return (
        <div>
        <nav className="flex md:w-[80%] px-4 w-[100%] top-0   left-1/2 transform -translate-x-1/2 z-20 fixed 
        
        flex-row justify-between  md:px-4 py-2 ">
<span className="text-white inline-flex items-center gap-2">
<img src={Mticon} className='w-[16px] h-[16px]'/>    MacArthur
</span>
<span className='p-4 md:hidden'>


<DehazeIcon onClick={()=>setActive(!active)} className='text-white cursor-pointer ' />
</span>
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