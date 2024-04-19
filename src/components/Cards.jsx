import React from 'react'

function Cards() {
  return (
    <div className=' flex items-center px-32 w-full h-screen bg-zinc-900 gap-5'>
        <div className='container w-1/2 h-[50vh] '>
            <div className='card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className=' absolute px-4 py-1 border-2 left-10 bottom-10 rounded-2xl'>&copy;2019</button>
            </div>
        </div>
        <div className='container w-1/2 h-[50vh] flex gap-5'>
        <div className='card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#7fc3ba]'>
        <img className='w-24' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className=' absolute px-4 py-1 border-2 left-10 bottom-10 rounded-2xl'>Business Bootcamp Alumni</button>
        </div>
        <div className='card relative flex items-center justify-center w-1/2 h-full rounded-xl bg-[#4f72a5]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className=' absolute px-4 py-1 border-2 left-10 bottom-10 rounded-2xl'>Rating 5.0 on Clutch</button>
        </div>
        </div>
    </div>
  )
}

export default Cards