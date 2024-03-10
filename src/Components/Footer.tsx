import Discord from '../assets/Discord.png'
import Figma from '../assets/Figma.png'
import Github from '../assets/Vector.png'
// import Mticon from '../assets/Union.png'
const Footer = () => {
    return (<div className='p-2 mt-10 md:border-t-[1px] md:flex md:flex-row md:justify-between'>
        <span className='text-center '>
            <h1 className='  text-white '>
            &copy;  MacArthur Kevin
            </h1>
           
        </span>

        <span>
<div className='text-white text-[24px] hidden md:block'>
    Media
</div>

<div className='md:flex md:flex-row md:gap-4 hidden '>
<img src={Discord}/>
<img src={Github}/>
<img src={Figma}/>
</div>
        </span>
    </div>  );
}
 
export default Footer;