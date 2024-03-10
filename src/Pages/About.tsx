import sideImage from '../assets/Group 50.png'
const About = () => {
    return (
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
      );
}
 
export default About;