import BackgroundImage from '../assets/Group 46.png'
import { projectDetails } from "../Constant/Project";
import liveIcon from '../assets/Live _~_ (1).png'
import lineIcon from '../assets/Line 7 (Stroke).svg'
import EastIcon from '@mui/icons-material/East';
import {Link} from 'react-router-dom'
import sideImage from '../assets/Group 50.png'
import { framework, languages, projects } from '../Constant/Skills';
import sideSkills from '../assets/Group 36.png'
const Body = () => {
    return (
        <div className='mt-14'>
        <div className='flex flex-col p-6 md:flex-row items-center'>
          
            <span className='flex md:w-[50%] flex-col gap-4'>
         <h1 className='font-semibold text-gray-200 text-[32px]'>       MacArthur Kevin is a
         <span className='text-[#C778DD]'>
          {' '} full stack
           software engiineer 
          </span>    </h1>

         <h2 className='text-[16px] text-gray-300'>
        
         He crafts responsive websites where technologies meet creativity
         </h2>
         <button className='border-[1px] w-[150px] md:w-[20%] border-[#C778DD] md:p-2 p-1 hover:bg-[#C778DD] transition-bg duration-700  hover:bg-opacity-[15%] text-gray-200'>Contact me!!</button>
            </span>
          
               

            <div className='relative '>
                <img src={BackgroundImage} className=''/>
                {/* <img src={SideImage} className='absolute top-0'/> */}
            </div>

          
        </div>
       
        <div className=''>
            <span className="flex flex-row justify-between  md:mt-10 p-6 items-center">
                <h1 className="inline-flex gap-2 items-center text-white font-medium text-[22px] md:text-[32px]">
                    <span className="text-[#C778DD]">
                        #
                    </span>
                    projects
                    {' '}
                    <img src={lineIcon} className  ="hidden md:w-[20%]"/>
                </h1>
<span>

</span>
        <Link to='/project'>        <h2 className="text-gray-200 inline-flex items-center gap-1">
                    View all  <EastIcon/>
                </h2></Link>
            </span>

            <div className="flex md:flex-row flex-col p-6 md:p-0 gap-4">
                {
                    projectDetails.slice(0,3).map((content,index)=>{
                        return (
                            <div key={index } >
                                <div className="border-[1px] border-gray-500">
                                    <img src={content.imageUrl} className="w-full"/>
                                    <h1 className="p-1 border-b-[1px] border-b-gray-500 text-gray-500 text-[14px] md:text-[16px]">
                                        {content.technologies}
                                    </h1>

                                    <span className="">
                                       <h1 className="text-white p-1 text-[16px] md:text-[22px]"> {content.title}
                                       </h1>

                                       <h3 className="text-gray-500 p-1 text-[14px] md:text-[16px]">
                                        {content.content}
                                       </h3>
                                       <button className="border-[1px] inline-flex items-center gap-2 justify-center border-[#C778DD] p-1 md:w-[30%] text-white ml-1 mb-1">Live <img src={liveIcon} alt="live icon"/>
                                        </button>
                                    </span>
                                    </div>
                            </div>
                        )
                    })
                }
                </div>
        </div>

        <div className=' mt-20'>
<span className='text-white pt-10 text-[22px] md:text-[32px] pl-4'>
#<span>
Skills
</span>
</span>
            <section className='flex md:flex-row flex-col justify-center gap-2 md:mt-20'> 
           <div>
            <img src={sideSkills} alt='side pics' className='hidden'/>
            </div>

            <div className='grid md:grid-cols-3 grid-cols-2 items-start gap-2 p-2 '>
                <div id='languages' className=' border-[1px] md:w-[150px] md:h-[100px] h-[150px] border-gray-400 '>
             {
                languages.map((content,index)=>(
                    <div key={index}>
                    <span className=' p-2  text-white'>
                        Languages
                    </span>
                    <ul className='border-t-[1px] px-1  border-t-gray-400  text-gray-400'>
                        <li>
                       {content.language1}
                        </li>
                        <li>
                            {content.language2}
                        </li>
                        <li>
                            {content.language3}
                        </li>
                     
                    </ul>     

                        </div>
                ))
             }
                   
                </div>

                <div id='languages' className='mt-2 border-[1px] border-gray-400 h-[100px] '>
               {
                projects.map((content,index)=>(
                    <div key={index}>
 <span className=' p-2  text-white'>
                        Tools
                    </span>
                    <ul className='border-t-[1px] px-1  border-t-gray-400  text-gray-400'>
                        <li>
                       {content.tools1}
                        </li>
                        <li>
                        {content.tools2}
                        </li>
                    </ul>
                        </div>
                ))
               }
               
                   
                </div>
                <div id='languages' className='mt-2  border-[1px] border-gray-400 h-[120px] '>
              
              {
                framework.map((content,index)=>(
                    <div key={index}>
                    <span className=' p-2  text-white'>
                        Frameworks
                    </span>
                    <ul className='border-t-[1px] px-1  border-t-gray-400  text-gray-400'>
                        <li>
                            {content.framework2}
                        </li>
                        <li>
                       {content.framework1}
                        </li>
                    </ul>     
                        </div>
                ))
              }
                   
                </div>

                <div className='mt-2 border-[1px] border-gray-400 '>
                    <span className=' p-2  text-white'>
                        Tools
                    </span>
                    <ul className='border-t-[1px] px-1  border-t-gray-400  text-gray-400'>
                        <li>
                            VScode 
                        </li>
                        <li>
                            Figma
                        </li>
                    </ul>
                </div>

                <div className='mt-2 border-[1px] border-gray-400 '>
                    <span className=' p-2  text-white'>
                        Frameworks 
                    </span>
                    <ul className='border-t-[1px] px-1  border-t-gray-400  text-gray-400'>
                        <li>
                            React Vue 
                        </li>
                    </ul>
                </div>
            </div></section>
        </div>


        <div className='flex flex-col  mt-20'>
            <header className='text-white text-[22px] md:text-[32px] p-4'>
                #about me
            </header>
<section className='flex md:flex-row flex-col-reverse items-center'>
    <div className=' md:w-[60%] text-gray-300 p-2'>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates distinctio recusandae doloremque est non veniam voluptatibus aliquam aspernatur assumenda reprehenderit eveniet libero, possimus natus excepturi doloribus perspiciatis quo animi itaque.
    <br/>
    <br/>
    <button className='border-[1px] inline-flex items-center gap-2 justify-center border-[#C778DD] p-1  text-white ml-1 mb-1"'>See more </button>
    </div>
    <div>
    <img src={sideImage} className='md:w-[80%] w-[50%] mx-auto'/>
</div>
</section>

        </div>
      </div>
     );
}
 
export default Body;