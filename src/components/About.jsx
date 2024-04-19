import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-[Neue Montreal] text-[3.5vw] leading-[4vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className=' w-full border-t-[2px] pt-10 mt-16 border-[#a1b562] flex gap-5'>
          <div className=' w-1/2 '>
            <h1 className='text-5xl'>Our approch :</h1>
            <button className='flex gap-8 items-center px-6 py-4 uppercase bg-zinc-900 mt-8 rounded-full text-white'>Read More
            <div className='h-1.5 w-1.5 bg-zinc-100 rounded-full text-white'></div></button>
          </div>
          <div className='w-1/2 h-[65vh] bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")] rounded-xl'></div>
        </div>
    </div>
  )
}

export default About