import sideImage from '../assets/Group 50.png'
import {Link} from 'react-router-dom'
import Skills from './Skills';
const About = () => {
    return (
   <div>
   <div className='flex flex-col pt-10 px-2  '>
            <Link to='/'>                 <h1 className="inline-flex font-medium gap-2 items-center text-white  text-[22px] md:text-[32px]">
                   <span className="text-[#C778DD]">
                        /
                    </span>
                    about-me 
                    {' '}
                </h1>
                </Link>
                <h3 className='text-gray-300'>
              Who am i?
                </h3>
<section className='flex md:flex-row flex-col-reverse items-center'>
    <div className=' md:w-[60%] text-gray-300 p-2'>
    Hello, i’m MacArthur Kevin!
<br/>
<br/>
I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. 
<br/>
<br/>
Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
    <br/>
    <br/>
    </div>
    <div>
    <img src={sideImage} className='md:w-[80%] w-[50%] mx-auto'/>
</div>
</section>
<div>
    <Skills/>
</div>
        </div>
        </div> );
}
 
export default About;