import { useState,useRef } from "react";
import emailjs from "@emailjs/browser";
import { Form } from "react-router-dom";

export function Contact({props}){
    const [isAlert,setIsAlert]=useState(0);

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      
  
      emailjs.sendForm('service_vxs7wmm', 'template_n4rg599', form.current, {
          publicKey: 'VmnQKXvEsljr_6B60',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    
    const [isFill,setIsFill]=useState({
        name:"",
        email:"",
        text:"",
       
      });

      const btnIsDisabled=isFill.name=="" || isFill.email=="" ||isFill.text=="" ;
      let btnClasses =false
      if(btnIsDisabled){btnClasses=true }
     else { btnClasses=false }

    return(

        <section id='Contact' className="p-5">
            <div class={isAlert==1 ?"  relative top-30  left-1/4  md:right-1/2 p-4 mb-4 text-sm text-white rounded-lg bg-purple-900 w-3/4 md:w-1/4 lg:w-1/8 mx-auto text-center":"hidden"} role="alert">
             <span class="font-medium">submit successfuly</span><br/>
             <button onClick={()=>{setIsAlert(0)}} className="text-green-400 bg-white rounded-xl px-3 py-2 cursor-pointer hover:text-white hover:bg-green-400 mt-2 font-bold">ok</button> 
             </div>

            <h1 className={props ?"text-center mx-auto pt-4 text-4xl text-purple-500 font-bold":"text-white font-bold text-center mx-auto pt-4 text-4xl "}>Contact me</h1>
            <form  ref={form} onSubmit={sendEmail} className="mt-5 w-3/4 mx-auto">
                <input  name="from_name"   type="text" placeholder="FULL NAME" value={isFill.name} onChange={(event)=>{setIsFill({...isFill,name:event.target.value})}} className={props ? "w-full mx-auto p-3 px-2 border-2 rounded-2xl border-purple-600 capitalize focus:border-2 focus:border-pink-700 ":"w-full mx-auto p-3 px-2 bg-white rounded-2xl focus:border-2 focus:border-purple-700  capitalize"}/>
                <input  name="from_email" type="email" placeholder="YOUR EMAIL" value={isFill.email} onChange={(event)=>{setIsFill({...isFill,email:event.target.value})}}  className={props ?"w-full mx-auto p-3 px-2 border-2  border-purple-600 rounded-2xl  invalid:border-2  mt-4 invalid:outline-red-500 invalid:text-red-500 invalid:outline-2   peer":"w-full mt-4 mx-auto p-3 px-2 bg-white rounded-2xl   invalid:outline-red-500 invalid:text-red-500 invalid:outline-2  peer  "}/>
                <p className="invisible peer-invalid:visible text-red-500">Please provide a valid email address.</p>
                <textarea name="message" rows={10} placeholder="YOUR MESSAGE" value={isFill.text} onChange={(event)=>{setIsFill({...isFill,text:event.target.value})}} className={props?"w-full mx-auto p-3 px-2  border-2 rounded-2xl border-purple-600 focus:border-2 focus:border-pink-700 mt-4 ":"w-full mt-4 mx-auto p-3 px-2 bg-white rounded-2xl focus:border-purple-700 "} />
                <div className="md:w-1/3 w-[50%] mx-auto mt-3">
                <button onClick={()=>{setIsAlert(1)}} type="submit"  disabled={btnIsDisabled} className={btnClasses ?"px-8 w-full text-nowrap   p-3 font-bold italic mx-auto text-center rounded-2xl bg-gray-400  text-gray-300   cursor-not-allowed ":"px-8 w-full text-nowrap   p-3 font-bold italic mx-auto text-center rounded-2xl bg-purple-600 hover:bg-pink-600 hover:duration-500 text-white   cursor-pointer"}> Send</button>
                </div>
            </form>
            
            


        </section>
    );
}