import { projectDetails } from "../Constant/Project";
import liveIcon from '../assets/Live _~_ (1).png'
import lineIcon from '../assets/Line 7 (Stroke).svg'
import EastIcon from '@mui/icons-material/East';
const Project = () => {
    return ( 
        <div>
            <span className="flex flex-row justify-between md:mt-10 p-6 items-center">
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
                <h2 className="text-gray-200 inline-flex items-center gap-1">
                    View all  <EastIcon/>
                </h2>
            </span>

            <div className="flex md:flex-row flex-col p-6 md:p-0 gap-4">
                {
                    projectDetails.map((content,index)=>{
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
     );
}
 
export default Project;