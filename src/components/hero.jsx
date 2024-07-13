import React from 'react'

const Hero = () => {
  return (
    // text and burger img overlay
    <div className=' mx-14 p-4 mt-6'>
      <div className='max-h-[670px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[670px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-4 ml-9 text-7xl  font-bold'>The <span className='text-orange-500'>Best</span></h1>
          <h1 className='px-4 ml-9 text-7xl font-bold'> <span className='text-orange-500'>Foods</span> Delivered</h1>
        </div>
        <img className='w-full max-h-[670px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
    </div>
  )
}

export default Hero