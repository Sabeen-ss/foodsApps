import React, { useState } from 'react';
import { data } from '../data/data';


const Food = () => {
  const [food, setFood] = useState(data);
//use filter to find different items category
  const FoodType = (category) => {
    setFood(data.filter((info) => {
      return info.category === category;

    }))
  };
//use filter for prices
  const PriceType = (price) => {
    setFood(data.filter((info) => {
      return info.price === price;
    }))
  };


  return (
    <div className='bg-white mx-auto p-4 mt-6'>
      {/* Center heading */}
      <h1 className='text-center text-4xl font-bold mb-4 text-orange-500'>Top Rated Menu Items</h1>

      {/* Filter type */}
      <div className='ml-14'>
        <h3 className='text-left text-lg text-gray-900 font-bold mb-2'>Filter Type</h3>
        <section className='flex items-start justify-start mb-6'>
          <button className='border-black rounded-lg bg-white text-black p-2 mr-3 hover:bg-orange-400 hover:text-white border border-orange-400' onClick={() => setFood(data)}>All</button>
          <button className='border-black rounded-lg bg-white text-black p-2 mr-3 hover:bg-orange-400 hover:text-white border border-orange-400' onClick={() => FoodType('burger')}>Burgers</button>
          <button className='border-black rounded-lg bg-white text-black p-2 mr-3 hover:bg-orange-400 hover:text-white border border-orange-400' onClick={() => FoodType('pizza')}>Pizza</button>
          <button className='border-black rounded-lg bg-white text-black p-2 mr-3 hover:bg-orange-400 hover:text-white border border-orange-400' onClick={() => FoodType('salad')}>Salads</button>
          <button className='border-black rounded-lg bg-white text-black p-2 mr-3 hover:bg-orange-400 hover:text-white border border-orange-400' onClick={() => FoodType('chicken')}>Chicken</button>
        </section>

        {/* Filter price */}
        <h3 className='text-left text-lg text-gray-900 font-bold mb-2'>Filter Price</h3>
        <section className='flex items-start justify-start mb-6'>
          <button className='border-black rounded-lg bg-white text-black p-2 mr-3 hover:bg-orange-400 hover:text-white border border-orange-400' onClick={() => PriceType('$')}>$</button>
          <button className='border-black rounded-lg bg-white text-black p-2 mr-3 hover:bg-orange-400 hover:text-white border border-orange-400' onClick={() => PriceType('$$')}>$$</button>
          <button className='border-black rounded-lg bg-white text-black p-2 mr-3 hover:bg-orange-400 hover:text-white border border-orange-400' onClick={() => PriceType('$$$')}>$$$</button>
          <button className='border-black rounded-lg bg-white text-black p-2 mr-3 hover:bg-orange-400 hover:text-white border border-orange-400' onClick={() => PriceType('$$$$')}>$$$$</button>
        </section>
      </div>

      {/*  displaying food items */}
      <div className='grid grid-cols-4 gap-8 mx-10  '>
        {food.map((info, index) => (
          <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer'>
            <img src={info.image} alt={info.name} className='w-full h-48 object-cover rounded-t-lg' />
            <div className='p-3'>
              <p className='font-bold'>{info.name}</p>
              <p className='text-gray-600'>
                <button className='border rounded-lg bg-orange-400 text-white pl-4 pr-4'><span >{info.price}</span></button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;