import Project1 from '../assets/project1 (1).jpg'
import Project2 from '../assets/project1 (1).png'
import Project3 from '../assets/project1 (2).png'
interface Projects{
    imageUrl:string,
    technologies:string,
    title:string,
    content:string
}
export const projectDetails:Projects[]=[
    {
imageUrl:Project1,
technologies:'Html,Css and Javascript ',
title:'Food ordering website',
content:'Used html and css to build amazing website to beuaty'
    },
    {
        imageUrl:Project2,
        technologies:'Html,Css and Javascript ',
        title:'Food ordering website',
        content:'Used html and css to build amazing website to beuaty'
            },{
                imageUrl:Project3,
                technologies:'Html,Css and Javascript ',
                title:'Food ordering website',
                content:'Used html and css to build amazing website to beuaty'
                    }
]