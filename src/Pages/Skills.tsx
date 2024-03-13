import { framework, languages, projects } from '../Constant/Skills';
import sideSkills from '../assets/Group 36.png'
const Skills = () => {
    return (  
        <div className=' mt-20'>

<h1 className="inline-flex px-4 font-medium gap-2 items-center text-white  text-[22px] md:text-[32px]">
                   <span className="text-[#C778DD]">
                        #
                    </span>skills
                    {' '}
                </h1>
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

                {/* <div className='mt-2 border-[1px] border-gray-400 '>
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
                </div> */}
            </div></section>
        </div>
    );
}
 
export default Skills;