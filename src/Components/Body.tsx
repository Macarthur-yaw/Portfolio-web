import BackgroundImage from '../assets/Group 46.png'
const Body = () => {
    return (
        <div className='mt-20'>
        <div className='flex flex-col md:flex-row items-center'>
          
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
       
      
      </div>
     );
}
 
export default Body;