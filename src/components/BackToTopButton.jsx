import React from "react";
import Uplight from "../images/uplight.png"
import Updark from "../images/updark.png"
import { useState, useEffect } from "react";
export  function BackToTopButton({props}){

    const [backToTopButton,setBackToTopButton]=useState(false);

    useEffect(()=>{

        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){  setBackToTopButton(true) }
            else {setBackToTopButton(false)}
        })
    },[])

    const scrollUp =()=>{
      
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })

    }

return(
    <div>

        {backToTopButton && (<img src={Uplight} className="fixed bottom-[50px] justify-center right-[50px] h-[50px] px-3 py-3 bg-purple-800 hover:bg-[#E60077]   rounded-full mx-auto text-center  cursor-pointer -rotate-90" onClick={scrollUp}/>)}



    </div>
);



}