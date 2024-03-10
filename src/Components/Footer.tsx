import Discord from '../assets/Discord.png'
import Figma from '../assets/Figma.png'
import Github from '../assets/Vector.png'
import Mticon from '../assets/Union.png'
const Footer = () => {
    return (<div className='p-2 border-t-[1px] flex flex-row justify-between'>
        <span>
            <h1 className='flex flex-row text-white'>
    <img src={Mticon}/>        &nbsp;    Kevin
            </h1>
            <h3 className='text-gray-200'>
                Web designer and Front end developer
            </h3>
        </span>

        <span>
<div className='text-white text-[24px]'>
    Media
</div>

<div className='flex flex-row gap-4'>
<img src={Discord}/>
<img src={Github}/>
<img src={Figma}/>
</div>
        </span>
    </div>  );
}
 
export default Footer;