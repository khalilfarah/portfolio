
import Menulight from "../images/menulight.png"
import MenuDark from "../images/menudark.png"
import XLight from "../images/xlight.png"
import XDark from "../images/xdark.png"
import { NavLink ,Link } from "react-router-dom"
import { useState ,useEffect } from "react"


const SectionsIds=["Home","About","Project","Skills","Contact"];

export function Navbar(props){
    const [isMenu ,SetIsMenu]=useState(false);
    const [isMode ,setIsMode]=useState(false);
    const [activeLinks ,setActiveLinks]=useState("Home");
    const [isScrolled,setIsScrolled]=useState(false);
    

    const scrollToSection=(sectionId)=>{
        const element=document.getElementById(sectionId);
        if(element) {
            const marginTop=0;
            const scrollToY=element.getBoundingClientRect().top + window.scrollY - marginTop;
            window.scrollTo({top:scrollToY });



          }
    };

    const determinActiveSection=()=>{

        for(let i=SectionsIds.length-1;i>=0;i--){
            const section=document.getElementById(SectionsIds[i]);
            if(section){
                const rect=section.getBoundingClientRect();
                if(rect.top<=120 && rect.bottom>=120){
                    setActiveLinks(SectionsIds[i]);
                    break;

                }

            }
        }
    };

    useEffect(()=>{

        const handleScroll=()=>{
            if (window.scrollY>300){
                setIsScrolled(!isScrolled);

            }
            else{setIsScrolled(isScrolled);}

            determinActiveSection();
        }
        window.addEventListener("scroll",handleScroll);
        return()=>{
            window.removeEventListener("scroll",handleScroll);
        }

    });


    useEffect(()=>{

        props.GetDataValue(isMode);
    }

    )

    return(

        <div className={isMode ?" px-2 bg-slate-900 sticky top-0  ":"px-2 bg-white  sticky top-0 "}>
            <div className="flex container mx-auto justify-between items-center  ">


            <div className="py-3 text-white font-bold     " >
                
                   <h1 className={isMode ?"text-center text-xl text-white":"text-center text-xl text-black "}>Eng-Khalil Farah</h1>
                   <p className={ isMode ?"text-lg text-nowrap text-white font-semibold  ":"text-lg text-nowrap text-black font-semibold"}>React Js | Frontend Dev</p>
                
              

            </div>

            <div className={isMode ?"space-x-8 font-semibold text-md lg:text-lg  text-nowrap hidden md:flex items-center text-white ":"space-x-8 font-semibold text-md lg:text-lg text-black text-nowrap hidden md:flex items-center"}>
                <a href="#Home" onClick={()=>scrollToSection(SectionsIds[0])} className={activeLinks === SectionsIds[0]?"     active hover:text-purple-300":"hover:text-purple-500   "}>Home</a>
                <a href="#About" onClick={()=>scrollToSection(SectionsIds[1])} className={activeLinks === SectionsIds[1]?"    active hover:text-purple-300":"hover:text-purple-500    "} >About</a>
                <a href="#Project" onClick={()=>scrollToSection(SectionsIds[2])} className={activeLinks === SectionsIds[2]?"  active  hover:text-purple-300":"hover:text-purple-500  "}>My Project</a>
                <a href="#Skills" onClick={()=>scrollToSection(SectionsIds[3])}  className={activeLinks === SectionsIds[3]?"  active  hover:text-purple-300":"hover:text-purple-500  "}>Skills</a>
                <a href="#Contact" onClick={()=>scrollToSection(SectionsIds[4])}  className={activeLinks === SectionsIds[4]?" active  hover:text-purple-300":"hover:text-purple-500  "}>Contact</a>
                <div className="justify-center">
                   <button onClick={()=>{setIsMode(!isMode)}} className={isMode?"hidden":"text-nowrap cursor-pointer  rounded-xl bg-gray-700 hover:bg-gray-800 text-white py-1 px-2"}>🕯 
                    Dark Mode</button>
                   <button  onClick={()=>{setIsMode(!isMode)}}  className={isMode?"text-nowrap cursor-pointer  rounded-xl bg-white text-black py-1 px-2 hover:bg-gray-800 hover:text-white":"hidden"}>💡Light Mode</button>

                </div>
             


            </div>

            <div className={isMode ?"md:hidden":"hidden"}>
                <img src={Menulight} alt="menulight"  onClick={()=>{SetIsMenu(!isMenu)}} className={isMenu ?"hidden":"w-10 cursor-pointer "  } />
                <img src={XLight} alt="xlight" onClick={()=>{SetIsMenu(!isMenu)}} className={isMenu ?"w-10 cursor-pointer" :"hidden" } />
            </div>
            

            <div className={isMode ?"hidden":"md:hidden"}>
                <img src={MenuDark} alt="menudark"  onClick={()=>{SetIsMenu(!isMenu)}} className={isMenu ?"hidden":"w-10 cursor-pointer "  } />
                <img src={XDark} alt="XDark" onClick={()=>{SetIsMenu(!isMenu)}} className={isMenu ?"w-10 cursor-pointer" :"hidden" } />
            </div>

            
            

            
                
            


            </div>

            
            <div className={isMenu  ? "md:hidden  p-3 space-y-6 items-center text-center font-semibold text-md" :" hidden "} >
                <div className={isMode ?"text-white p-3 space-y-6 items-center text-center font-semibold text-md":"text-black p-3 space-y-6 items-center text-center font-semibold text-md"}>
                <a href="#Home" onClick={()=>scrollToSection(SectionsIds[0])} className={activeLinks === SectionsIds[0]?" block active hover:text-purple-300":"block hover:text-purple-500"}>Home</a>
                <a href="#About"  onClick={()=>scrollToSection(SectionsIds[1])} className={activeLinks === SectionsIds[1]?" block active hover:text-purple-300":"block hover:text-purple-500"}>About</a>
                <a href="#Project"  onClick={()=>scrollToSection(SectionsIds[2])} className={activeLinks === SectionsIds[2]?" block active hover:text-purple-300":"block hover:text-purple-500"}>My Project</a>
                <a href="#Skills"  onClick={()=>scrollToSection(SectionsIds[3])} className={activeLinks === SectionsIds[3]?" block active hover:text-purple-300":"block hover:text-purple-500"}>Skills</a>
                <a href="#contact"  onClick={()=>scrollToSection(SectionsIds[4])} className={activeLinks === SectionsIds[4]?" block active hover:text-purple-300":"block hover:text-purple-500"}>Contact</a>
                <div className="block justify-center">
                <button onClick={()=>{setIsMode(!isMode)}} className={isMode?"hidden":"text-nowrap cursor-pointer  rounded-xl bg-gray-700 hover:bg-gray-800 text-white py-1 px-2"}>🕯 
                    Dark Mode</button>
                   <button  onClick={()=>{setIsMode(!isMode)}}  className={isMode?"text-nowrap cursor-pointer  rounded-xl bg-white text-black py-1 px-2 hover:bg-gray-800 hover:text-white":"hidden"}>💡Light Mode</button>

                </div>

                

            </div>
            </div>
           
        </div>
    );
}