import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Home } from "../components/Home";
import { Project } from "../components/Project";
import { Skills } from "../components/Skills";


export function Protofolio({props}){
    return(

        <div>
            <Home props={props} />
            <About props={props} />
            <Project props={props} />
            <Skills props={props}  />
            <Contact props={props}  />

           
           


        </div>
    );
}