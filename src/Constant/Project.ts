import Project1 from '../assets/project1 (1).jpg'
import Project2 from '../assets/project1 (1).png'
import Project3 from '../assets/project1 (2).png'
interface Projects{
    imageUrl:string,
    technologies:string,
    title:string,
    content:string
}
interface smallProjects{
    tools:string,
    title:string,
    content:string 
    githubLink?:string
}

export const smallProjects:smallProjects[]=[
    {
        tools:"Html,css and Javascript",
        title:"Housplug",
        content:"A landing page of a house selling website",
        githubLink:"https://github.com/Macarthur-yaw?tab=repositories"

    },{
        tools:"Html,Php and Mysql",
        title:"Create, Read,Update and Delete app",
        content:"A CRUD app built to handle operations on database",
     
    },{
        tools:"Node js, Express js and Mongo db",
        title:"News api",
        content:"An application programming interface which fetches news about a country"
    },{
        tools:"React js and Tailwindcss",
        title:"Create,read,update and delete",
        content:"Using Reactjs, I created a frontend CRUD app."
    }
]
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
                    },{
                        imageUrl:Project2,
                        technologies:'Html,Css and Javascript ',
                        title:'Food ordering website',
                        content:'Used html and css to build amazing website to beuaty'
                                        
                    },{
                        imageUrl:Project2,
                        technologies:'Html,Css and Javascript ',
                        title:'Food ordering website',
                        content:'Used html and css to build amazing website to beuaty'
                     
                    }
]