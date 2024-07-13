import React from 'react';

const Cards = () => {
 
  return (
    <div className='bg-white mx-16 p-4 mt-6 flex flex-row space-x-40'>
      {/* Card 1 */}
      <div className='relative w-[25%] max-h-[32vh] rounded-lg'>
        <div  className='absolute inset-0 text-gray-200 bg-black/60 flex flex-col justify-center p-4 rounded-lg'>
          <h2 className='text-xl font-bold'>We Deliver Desserts</h2>
          <p className='text-sm'>Tasty Pancakes</p>
          <button className='bg-white text-black w-[50%] p-2 mt-2 rounded'>Order Now</button>
        </div>
        <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Card 1' />
      </div>

      {/* Card 2 */}
      <div className='relative w-[25%] max-h-[32vh] rounded-lg'>
        <div className='absolute inset-0 text-gray-200 bg-black/40 flex flex-col justify-center p-4 rounded-lg'>
          <h2 className='text-xl font-bold'>Sun's Out, BOGO's Out</h2>
          <p className='text-sm'>Through 8/26</p>
          <button className='bg-white text-black w-[50%] p-2 mt-2 rounded'>Order Now</button>
        </div>
        <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/2983104/pexels-photo-2983104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Card 2' />
      </div>

      {/* Card 3 */}
      <div className='relative w-[25%] max-h-[32vh] rounded-lg'>
        <div className='absolute inset-0 text-gray-200 bg-black/40 flex flex-col justify-center p-4 rounded-lg'>
          <h2 className='text-xl font-bold'>Sun's Out, BOGO's Out</h2>
          <p className='text-sm'>Through 8/26</p>
          <button className='bg-white text-black w-[50%] p-2 mt-2 rounded'>Order Now</button>
        </div>
        <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/2874989/pexels-photo-2874989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Card 3' />
      </div>
    </div>
  );
}

export default Cards;
