import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
function LandingPage() {
  return (
    
    <div data-screll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>
            {["we create", "eye opening", "presentations"].map((item, index)=>{
                return  (
                <div key={index} className='masker'>
                  <div className='w-fit flex '>
                   {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "6vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1.4 }}  className=' mr-[.5vw] w-[6vw] h-[4.5vw] relative bg-cover bg-center  bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] mt-[.6vw] rounded-md'></motion.div>)}
                  <h1 className=" uppercase text-[6vw] font-['Founders Grotesk'] leading-[5vw] tracking-tight font-bold">{item}</h1>
                  </div>
            </div>
                );
            })}
           
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between px-5  py-16'>
           {[
            "For public and private companies", "From the first pitch to IPO",
           ].map((item, index) =>(
            <p className='text-md font-light tracking-tight leading-none'>{item}</p>
           ))}
           <div className='start flex items-center gap-5'>
          <div className='px-4 py-1 border-[1px] border-zinc-400 font-light text-sm uppercase rounded-full' >Start the Project</div>    
             <div className='w-10 h-10 border-[2px] border-zinc-500 flex items-center justify-center rounded-full'>
              <span className=' rotate-[45deg]'>
              <FaArrowUpLong />
               </span>
            </div>
          
          </div>
        </div>
    </div>
  )
}

export default LandingPage