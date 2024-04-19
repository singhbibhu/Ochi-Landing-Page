import { motion, useAnimate, useAnimation } from 'framer-motion'
import React from 'react'

function Featured() {
  const cards =[useAnimation(), useAnimation()];

  const handleHover = (index)=>{
    cards[index].start({y:"0"})
  }
  const handleHoverEnd = (index)=>{
    cards[index].start({y:"100%"})
  }
  return (
    <div className=' w-full  py-20 '>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-6xl font-["Neue Motreal"]  tracking-tight '>Featured Projects</h1>
      </div>
      <div className='px-20 '>
      <div className=' cards w-full flex gap-10 mt-10'>
       
          <motion.div onHoverStart={()=>handleHover(0)}
          onHoverEnd={()=>handleHoverEnd(0)}
           className=' cardconatiner relative w-1/2 h-[75vh]  '>
          <h1 className=' flex absolute left-full font-semibold text-[#8954d8] z-[9] overflow-hidden leading-none tracking-tighter text-6xl -translate-x-1/2 top-1/2 -translate-y-1/2'  >
            {"FYDE" .split('').map((item, index)=>(
            <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease:[.002, 1, 0.36, 1], delay: index*.054}}  className=' inline-block '>{item}</motion.span>
            ))} 
            </h1>
            <div className='card w-full h-full  rounded-xl  overflow-hidden'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"  />
            </div>
          </motion.div>
          <motion.div onHoverStart={()=>handleHover(1)}
          onHoverEnd={()=>handleHoverEnd(1)} className='cardconatiner relative  w-1/2 h-[75vh] '>
         
            <div className='card w-full h-full rounded-xl  overflow-hidden'>
            <h1 className='flex overflow-hidden absolute right-full text-[#42bda8] z-[9] leading-none tracking-tighter text-6xl font-semibold translate-x-1/2 top-1/2 -translate-y-1/2'  >
            {"VISE" .split('').map((item, index)=>(<motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease:[.002, 1, 0.36, 1], delay: index*.054}}  className=' inline-block '>{item}</motion.span>))} 
            </h1>
            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"  />
            </div>
          </motion.div>
        </div>
      </div>
      
    </div>
  )
}

export default Featured