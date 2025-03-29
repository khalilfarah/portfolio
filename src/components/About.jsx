export function About({props}){
    const content ={

        "post1":"Hello, I'm Khalil Farah, an IT engineer living in Syria. I work in web development using React JS and have several projects under my belt. I always strive to develop myself and acquire new skills. I'm very passionate about this field and always ready to satisfy clients according to their needs.",
        "post2":"I hold a Bachelor's degree in IT Engineering from the University of Homs with a very good grade, 2017-2022."
    }

    return(

        <section id='About' className="p-5 lg:w-3/4 mx-auto">
            <h1 className={props ?"text-center mx-auto pt-4 text-4xl text-purple-500 font-bold":"text-white font-bold text-center mx-auto pt-4 text-4xl "}>About</h1>
            <div className="md:flex gap-8 mx-auto">
            <div className="md:w-1/2 bg-gradient-to-b from-purple-400 from-20% to-purple-800 rounded-2xl to-80%  mx-auto mt-5">
                <h1 className="text-center text-2xl text-white font-bold pt-4">About me</h1>
                <p className="text-center mx-auto pt-4 text-xl text-white px-5 pb-4 italic">{content.post1}</p>
            </div>

            <div className="md:w-1/2 bg-gradient-to-b from-purple-400 from-20% to-purple-800 to-80%  rounded-2xl mx-auto mt-5">
                <h1 className="text-center text-2xl text-white font-bold pt-4">Education:</h1>
                <p className="text-center mx-auto pt-4 text-xl text-white px-5 pb-4 italic">{content.post2}</p>
            </div>

            </div>


        </section>
    );
}