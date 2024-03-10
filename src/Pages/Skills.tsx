import sideSkills from '../assets/Group 36.png'
const Skills = () => {
    return (  
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
                <div id='languages' className=' border-[1px] md:w-[150px] md:h-[100px] border-gray-400 '>
                    <span className=' p-2  text-white'>
                        Languages
                    </span>
                    <ul className='border-t-[1px] px-1  border-t-gray-400  text-gray-400'>
                        <li>
                            Postgres sql 
                        </li>
                        <li>
                            Javascript
                        </li>
                    </ul>
                </div>

                <div id='languages' className='mt-2 border-[1px] border-gray-400 '>
                    <span className=' p-2  text-white'>
                        Projects 
                    </span>
                    <ul className='border-t-[1px] px-1  border-t-gray-400  text-gray-400'>
                        <li>
                            Postgres sql 
                        </li>
                        <li>
                            Javascript
                        </li>
                    </ul>
                </div>
                <div id='languages' className='mt-2  border-[1px] border-gray-400 '>
                    <span className=' p-2  text-white'>
                        Languages
                    </span>
                    <ul className='border-t-[1px] px-1  border-t-gray-400  text-gray-400'>
                        <li>
                            Postgres sql 
                        </li>
                        <li>
                            Javascript
                        </li>
                    </ul>
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
    );
}
 
export default Skills;