import lineIcon from '../assets/Line 7 (Stroke).svg'
import { projectDetails, smallProjects } from "../Constant/Project";
import liveIcon from '../assets/Live _~_ (1).png'
import {Link} from 'react-router-dom'
const Project = () => {
    return ( 
        <div>
            <span className="flex flex-col gap-4 items-start md:flex-row justify-between md:mt-10 p-6 md:items-center">
            <Link to='/'>                 <h1 className="inline-flex font-medium gap-2 items-center text-white  text-[22px] md:text-[32px]">
                   <span className="text-[#C778DD]">
                        /
                    </span>
                    projects
                    {' '}
                    <img src={lineIcon} className  ="hidden md:w-[20%]"/>
                </h1>
                </Link>
                <h3 className='text-gray-300'>
                    List of my projects
                </h3>
<span>

</span>
            </span>


      <main>
      <h1 className="inline-flex px-6 font-medium  items-center text-white  text-[16px] md:text-[32px]">
                    <span className="text-[#C778DD]">
                        #
                    </span>
 completed-projects                   
                    <img src={lineIcon} className  ="hidden md:w-[20%]"/>
                </h1>

      <div className="md:flex grid grid-cols-2 md:flex-row p-2  md:p-0 gap-2">
                {
                    projectDetails.map((content,index)=>{
                        return (
                            <div key={index } className='' >
                                <div className="border-[1px] border-gray-500">
                                    <img src={content.imageUrl} className="w-full"/>
                                    <h1 className="p-1 border-b-[1px] border-b-gray-500 text-gray-500 text-[12px] md:text-[16px]">
                                        {content.technologies}
                                    </h1>

                                    <div className='p-1 flex flex-col gap-1'>
                                       <h1 className="text-white  text-[14px] md:text-[22px]"> {content.title}
                                       </h1>

                                       <h3 className="text-gray-500  text-[12px] md:text-[16px]">
                                        {content.content}
                                       </h3>
                                       <button className="border-[1px] w-[40%] text-[12px] inline-flex items-center gap-2 justify-center border-[#C778DD] p-2 md:w-[30%] text-white ml-1 mb-1">Live <img src={liveIcon} alt="live icon" className=' '/>
                                        </button>
                                    </div>
                                    </div>
                            </div>
                        )
                    })
                }
                </div>
        </main>  

        <section className='mt-20'>
        <h1 className="inline-flex px-6 font-medium  items-center text-white  text-[16px] md:text-[32px]">
                    <span className="text-[#C778DD]">
                        #
                    </span>
 mini-projects                   
                    <img src={lineIcon} className  ="hidden md:w-[20%]"/>
                </h1>


        <div className="md:flex grid grid-cols-2 md:flex-row p-2  md:p-0 gap-2">
      
        {
                    smallProjects.map((content,index)=>{
                        return (
                            <div key={index } className='' >
                                <div className="border-[1px] border-gray-500">
                                    <h1 className="p-1 border-b-[1px] border-b-gray-500 text-gray-500 text-[12px] md:text-[16px]">
                                        {content.title}
                                    </h1>

                                    <span className="px-4">
                                       <h1 className="text-white p-1 text-[14px] md:text-[22px]"> {content.title}
                                       </h1>

                                       <h3 className="text-gray-500 p-1 text-[12px] md:text-[16px]">
                                        {content.content}
                                       </h3>
                                       <button className="border-[1px] text-[12px] inline-flex items-center gap-2 justify-center border-[#C778DD] p-2 md:w-[30%] text-white ml-1 mb-1">Github <img src={liveIcon} alt="live icon" className=' '/>
                                        </button>
                                    </span>
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
            </section>    
        </div>
     );
}
 
export default Project;