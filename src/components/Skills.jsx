import Work from "../images/work4.jpg"
export function Skills({props}){

    return(

        <section id='Skills' className="p-5">
            <h1 className={props ?"text-center mx-auto pt-4 text-4xl text-purple-500 font-bold":"text-white font-bold text-center mx-auto pt-4 text-4xl "}>Skills</h1>
            
            <div className="mt-5 lg:flex">
                <div className="lg:w-1/2 px-3">


                <div className="bg-white rounded-lg mb-3" >
                        <div className="flex justify-between p-2 ">
                        <h1 className="text-2xl font-bold text-purple-700">HTML5</h1>
                        <h1 className="text-2xl font-bold text-purple-700">95%</h1>
                        
                        </div>
                       
                          <hr className="w-[95%] font-bold text-purple-700  bg-purple-700 h-[10px] rounded-lg" />
                       
                        
                        
                    </div>

                    <div className="bg-white rounded-lg mb-3 ">
                        <div className="flex justify-between p-2 ">
                        <h1 className="text-2xl font-bold text-purple-700">CSS3</h1>
                        <h1 className="text-2xl font-bold text-purple-700">90%</h1>
                        
                        </div>
                       
                          <hr className="w-[90%] font-bold text-purple-700  bg-purple-700 h-[10px] rounded-lg" />
                       
                        
                        
                    </div>


                    <div className="bg-white rounded-lg mb-3 ">
                        <div className="flex justify-between p-2 ">
                        <h1 className="text-2xl font-bold text-purple-700">JavaSCript</h1>
                        <h1 className="text-2xl font-bold text-purple-700">80%</h1>
                        
                        </div>
                       
                          <hr className="w-[80%] font-bold text-purple-700  bg-purple-700 h-[10px] rounded-lg" />
                       
                        
                        
                    </div>


                    <div className="bg-white rounded-lg mb-3 ">
                        <div className="flex justify-between p-2 ">
                        <h1 className="text-2xl font-bold text-purple-700">TailwindCss v4</h1>
                        <h1 className="text-2xl font-bold text-purple-700">90%</h1>
                        
                        </div>
                       
                          <hr className="w-[90%] font-bold text-purple-700  bg-purple-700 h-[10px] rounded-lg" />
                       
                        
                        
                    </div>

                    <div className="bg-white rounded-lg mb-3 ">
                        <div className="flex justify-between p-2 ">
                        <h1 className="text-2xl font-bold text-purple-700">React Js</h1>
                        <h1 className="text-2xl font-bold text-purple-700">80%</h1>
                        
                        </div>
                       
                          <hr className="w-[80%] font-bold text-purple-700  bg-purple-700 h-[10px] rounded-lg" />
                       
                        
                        
                    </div>

                    <div className="bg-white rounded-lg mb-3 ">
                        <div className="flex justify-between p-2 ">
                        <h1 className="text-2xl font-bold text-purple-700">UI/UX figma</h1>
                        <h1 className="text-2xl font-bold text-purple-700">80%</h1>
                        
                        </div>
                       
                          <hr className="w-[80%] font-bold text-purple-700  bg-purple-700 h-[10px] rounded-lg" />
                       
                        
                        
                    </div>


                    


                </div>
                <div className="lg:w-1/2 h-fit  mx-auto">
                    <img src={Work} alt="work" className="rounded-2xl w-full h-fit hover:duration-500 hover:scale-[0.9]" />
                </div>

                
            </div>

        </section>
    )
}