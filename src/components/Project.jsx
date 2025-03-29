import { useState } from "react";
import Graved from "../images/Graved.png"
import Shop from "../images/shop.png"
import Lava from "../images/lava.png"
import Tallor from "../images/tallor.png"
import Froncheer from "../images/froncheer.png"
import Digital from "../images/digital.png"

export function Project ({props}){
    const [isHover,setIsHover]=useState(0);
    const [isView,setIsView]=useState(false);
    

    return(

        <section id='Project' className="p-5 ">
            <h1 className={props ?"text-center mx-auto pt-4 text-4xl text-purple-500 font-bold":"text-white font-bold text-center mx-auto pt-4 text-4xl "}>My Projects</h1>

            <div  className="p-3 mt-4 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 ">
                
                <div  className="relative  " >
                    <img onMouseOver={()=>{setIsHover(1)}} onMouseOut={()=>{setIsHover(0)}} src={Graved} className={isHover==1?"rounded-2xl opacity-30 hover:duration-700 h-[300px] ":"rounded-2xl  hover:duration-700 h-[300px]"} />
                    <div onMouseOver={()=>{setIsHover(1)}} onMouseOut={()=>{setIsHover(0)}} className={isHover==1?"absolute top-1/3 left-[0.1%] w-full":"hidden"}>
                        <p className={props?"text-pink-700 font-bold text-center mx-auto text-2xl text-nowrap pb-5":"text-white font-bold text-center mx-auto text-2xl text-nowrap pb-5"}>Website by Tailwindcss </p>
                        <div className=" w-1/2  mx-auto">
                           <a  href="https://webtailwindcss.netlify.app/"  target="_blank"><h1 className="px-8 w-full  p-3 font-bold italic mx-auto text-center rounded-2xl bg-purple-600 hover:bg-pink-600 hover:duration-500 text-white   cursor-pointer">View</h1></a>
                        </div>
                    </div>


                </div>

                <div  className="relative" >
                    <img onMouseOver={()=>{setIsHover(2)}} onMouseOut={()=>{setIsHover(0)}} src={Shop} className={isHover==2?"rounded-2xl opacity-30 hover:duration-700 h-[300px] ":"rounded-2xl  hover:duration-700 h-[300px]"} />
                    <div onMouseOver={()=>{setIsHover(2)}} onMouseOut={()=>{setIsHover(0)}} className={isHover==2?"absolute top-1/3 left-[0.1%] w-full":"hidden"}>
                        <p className={props?"text-pink-700 font-bold text-center mx-auto text-2xl text-nowrap pb-5":"text-white font-bold text-center mx-auto text-2xl text-nowrap pb-5"}>Shop Website  by Tailwindcss </p>
                        <div className=" w-1/2  mx-auto">
                           <a  href="https://webtechnologystore.netlify.app/"  target="_blank"><h1 className="px-8 w-full  p-3 font-bold italic mx-auto text-center rounded-2xl bg-purple-600 hover:bg-pink-600 hover:duration-500 text-white   cursor-pointer">View</h1></a>
                        </div>
                    </div>


                </div>

                <div  className="relative" >
                    <img onMouseOver={()=>{setIsHover(3)}} onMouseOut={()=>{setIsHover(0)}} src={Lava} className={isHover==3?"rounded-2xl opacity-30 hover:duration-700 h-[300px] ":"rounded-2xl  hover:duration-700 h-[300px]"} />
                    <div onMouseOver={()=>{setIsHover(3)}} onMouseOut={()=>{setIsHover(0)}} className={isHover==3?"absolute top-1/3 left-[0.1%] w-full":"hidden"}>
                        <p className={props?"text-pink-700 font-bold text-center mx-auto text-2xl text-nowrap pb-5":"text-white font-bold text-center mx-auto text-2xl text-nowrap pb-5"}>Landing Page  </p>
                        <div className=" w-1/2  mx-auto">
                           <a  href="https://lavalandingpage.netlify.app/"   target="_blank"><h1 className="px-8 w-full  p-3 font-bold italic mx-auto text-center rounded-2xl bg-purple-600 hover:bg-pink-600 hover:duration-500 text-white   cursor-pointer">View</h1></a>
                        </div>
                    </div>


                </div>

                <div  className="relative" >
                    <img onMouseOver={()=>{setIsHover(4)}} onMouseOut={()=>{setIsHover(0)}} src={Tallor} className={isHover==4?"rounded-2xl opacity-30 hover:duration-700 h-[300px] ":"rounded-2xl  hover:duration-700 h-[300px]"} />
                    <div onMouseOver={()=>{setIsHover(4)}} onMouseOut={()=>{setIsHover(0)}} className={isHover==4?"absolute top-1/3 left-[0.1%] w-full":"hidden"}>
                        <p className={props?"text-pink-700 font-bold text-center mx-auto text-2xl text-nowrap pb-5":"text-white font-bold text-center mx-auto text-2xl text-nowrap pb-5"}>Tallor Shop Website </p>
                        <div className=" w-1/2  mx-auto">
                           <a  href="https://tallor-shop.netlify.app/"  target="_blank"><h1 className="px-8 w-full  p-3 font-bold italic mx-auto text-center rounded-2xl bg-purple-600 hover:bg-pink-600 hover:duration-500 text-white   cursor-pointer">View</h1></a>
                        </div>
                    </div>


                </div>

                <div  className="relative" >
                    <img onMouseOver={()=>{setIsHover(5)}} onMouseOut={()=>{setIsHover(0)}} src={Froncheer} className={isHover==5?"rounded-2xl opacity-30 hover:duration-700 h-[300px] ":"rounded-2xl  hover:duration-700 h-[300px]"} />
                    <div onMouseOver={()=>{setIsHover(5)}} onMouseOut={()=>{setIsHover(0)}} className={isHover==5?"absolute top-1/3 left-[0.1%] w-full":"hidden"}>
                        <p className={props?"text-pink-700 font-bold text-center mx-auto text-2xl text-nowrap pb-5":"text-white font-bold text-center mx-auto text-2xl text-nowrap pb-5"}>space Website  </p>
                        <div className=" w-1/2  mx-auto">
                           <a  href="https://froncheer.netlify.app/"  target="_blank"><h1 className="px-8 w-full  p-3 font-bold italic mx-auto text-center rounded-2xl bg-purple-600 hover:bg-pink-600 hover:duration-500 text-white   cursor-pointer">View</h1></a>
                        </div>
                    </div>


                </div>

                <div  className="relative" >
                    <img onMouseOver={()=>{setIsHover(6)}} onMouseOut={()=>{setIsHover(0)}} src={Digital} className={isHover==6?"rounded-2xl opacity-30 hover:duration-700 h-[300px] ":"rounded-2xl  hover:duration-700 h-[300px]"} />
                    <div onMouseOver={()=>{setIsHover(6)}} onMouseOut={()=>{setIsHover(0)}} className={isHover==6?"absolute top-1/3 left-[0.1%] w-full":"hidden"}>
                        <p className={props?"text-pink-700 font-bold text-center mx-auto text-2xl text-nowrap pb-5":"text-white font-bold text-center mx-auto text-2xl text-nowrap pb-5"}>Digital Trend Website</p>
                        <div className=" w-1/2  mx-auto">
                           <a  href="https://digital-trend.netlify.app/"  target="_blank"><h1 className="px-8 w-full  p-3 font-bold italic mx-auto text-center rounded-2xl bg-purple-600 hover:bg-pink-600 hover:duration-500 text-white   cursor-pointer">View</h1></a>
                        </div>
                    </div>


                </div>


            </div>


 


            <div className="w-[70%] md:w-1/4 mx-auto">
                <button onClick={()=>{setIsView(!isView)}} className={isView ?"hidden":"px-8 w-full text-nowrap   p-3 font-bold italic mx-auto text-center rounded-2xl bg-purple-600 hover:bg-pink-600 hover:duration-500 text-white   cursor-pointer"}>Show  More</button>
                <button onClick={()=>{setIsView(!isView)}} className={isView ?"px-8 w-full text-nowrap  p-3 font-bold italic mx-auto text-center rounded-2xl bg-purple-600 hover:bg-pink-600 hover:duration-500 text-white   cursor-pointer":"hidden"}>Show Less</button>
            </div>


        </section>
    );
}