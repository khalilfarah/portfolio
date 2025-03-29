import Work from "../images/work3.jpg"
import Facebook from "../images/facebook.png"
import Linkedin from "../images/linkedin.png"
import Telegram from "../images/telegram.png"
import Call from "../images/call.png"
import Email from "../images/email.png"
import { useState } from "react"
export function Home({props}){
    const [isAlert,setIsAlert]=useState(0);

    return(
        <section id='Home' className="p-5">
            <div class={isAlert==1 ?"  absolute top-1 right-1/5  md:right-1/2 p-4 mb-4 text-sm text-white rounded-lg bg-purple-900 w-3/4 md:w-1/4 lg:w-1/8 mx-auto text-center":"hidden"} role="alert">
             <span class="font-medium">My number: <br/>+963 99-113-2008</span><br/>
             <button onClick={()=>{setIsAlert(0)}} className="text-green-400 bg-white rounded-xl px-3 py-2 cursor-pointer hover:text-white hover:bg-green-400 mt-2 font-bold">ok</button> 
             </div>

             <div class={isAlert==2 ?"  absolute top-1 right-1/5  md:right-1/2 p-4 mb-4 text-sm text-white  rounded-lg bg-purple-900 w-3/4 md:w-1/4  mx-auto text-center":"hidden"} role="alert">
             <span class="font-medium">My Email is:<br/>khalilfarah464@gmail.com</span><br/>
             <button onClick={()=>{setIsAlert(0)}} className="text-green-400 bg-white rounded-xl px-3 py-2 cursor-pointer hover:text-white hover:bg-green-400 mt-2 font-bold">ok</button> 
             </div>

            <h1 className={props ?"text-center mx-auto pt-4 text-4xl text-purple-500 font-bold":"text-white font-bold text-center mx-auto pt-4 text-4xl "}>Home</h1>
        <section  className="p-5 md:flex">
            
            


            <div className="md:w-1/2 pt-5 lg:pt-30 md:pt-20 text-center  ">
                <h1 className={props ?"lg:text-5xl md:text-4xl text-3xl text-purple-500 font-bold ":"lg:text-5xl md:text-4xl text-3xl text-white  font-bold "}>Eng-Khalil Farah</h1>
                <p className={props ? "font-semibold lg:text-3xl md:text-2xl text-xl text-purple-500 pt-4":"font-semibold lg:text-3xl md:text-2xl text-xl text-white pt-4"}>React Js | Frontend Developer</p>
                <div className="flex space-x-6 md:space-x-6 justify-center items-center pt-5">
                  <a href="https://www.facebook.com/khalilfarah464" target="_blank" className=""><img src={Facebook} alt="facebook" className=" rounded-lg px-3 py-3 bg-purple-800 cursor-pointer hover:bg-purple-400 " /> </a>
                   <a href="https://www.Linkedin.com/khalilfarah464" target="_blank" > <img src={Linkedin} alt="Linkedin" className=" rounded-lg px-3 py-3 bg-purple-800 cursor-pointer hover:bg-purple-400 "/></a>
                   <a href="https://www.T.me/KhalilFarah" target="_blank" > <img  src={Telegram} alt="Telegram" className=" rounded-lg px-3 py-3 bg-purple-800 cursor-pointer hover:bg-purple-400 "/></a>
                   <a  onClick={()=>{setIsAlert(1)}} target="_blank"  > <img src={Call} alt="Call"         className=" rounded-lg px-3 py-3 bg-purple-800 cursor-pointer hover:bg-purple-400 "/></a>
                   <a  onClick={()=>{setIsAlert(2)}} target="_blank" > <img src={Email} alt="Email"         className=" rounded-lg px-3 py-3 bg-purple-800 cursor-pointer hover:bg-purple-400 "/></a>


                </div>

            </div>


            <div className="md:w-1/2 pt-5">
                <img  src={Work} alt="work" className="rounded-2xl mx-auto hover:duration-500  hover:scale-[0.9]" />

            </div>

            
            


        </section>
        
        </section>
    );
}