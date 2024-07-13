
import React, { useState } from 'react';
import { categories } from '../data/data';

const Category = () => {
  const [snack, setSnack] = useState(categories);

  return (
    <>
      <h1 className='text-center text-4xl font-bold mb-4 text-orange-500 mt-4'>Top Rated Menu Items</h1>
      <div className='bg-white mx-36 h-[90%] mt-11'>

        <div className='grid grid-cols-4 gap-6'>
          {snack.map((e) => (
            <div key={e.id} className='p-4 border shadow-2xl rounded-2xl flex flex-row items-center'>

              <img className=' h-32 object-cover rounded-t-lg' src={e.image} alt={e.name} />
              <h3 className='text-center text-base font-bold'>{e.name}</h3>

            </div>
          ))}
        </div>
        <div className='p-5'></div>
      </div>
    </>
  );
}

export default Category;