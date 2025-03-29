export function Foteer({props}){

    return(
        <section>
            <hr className={props ?" w-3/4 px-2 h-[3px] text-purple-800 mx-auto":"w-3/4 mx-auto px-2 h-[3px] text-white"}/>
            <h1 className={props ?"text-xl text-center mx-auto pt-5 pb-5 text-purple-800 font-semibold":"text-xl text-center mx-auto pt-5 pb-5 bg-slate-900 text-white"}>©All rigths reserved | by <code className="text-[#E2007D]">Eng-Khalil Farah</code> </h1>

        </section>
    )
}