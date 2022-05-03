/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const TopList = () => {
  return (
    <div className='md:ml-72 md:mr-72 ml-20 mr-20 -mt-10 grid md:grid-cols-3 sm:grid-cols-1'>
            <section className='bg-white border p-5 col-span-1 rounded'>
                <h2 className='font-bold text-sm'>FS - QUILTED MAXI <br/> CROSS BAG</h2>
                <img src={require('../images/b2.webp')} className="w-56 h-48"/>
                <span className='line-through text-xs text-gray-400'>$534.34</span>
                <span className='text-red-500 font-bold text-xs'> 24% Off</span>
                <span className='text-xl text-teal-400'>  &emsp;&emsp;&emsp;$299.00</span>
            </section>
            <section className='bg-white border p-5 col-span-1 rounded'>
                <h2 className='font-bold text-sm'>Nike Air max  <br/> 270 Shoes</h2>
                <img src={require('../images/s2.jpg')} className="w-56 h-48"/>
                <span className='line-through text-xs text-gray-400'>$534.34</span>
                <span className='text-red-500 font-bold text-xs'> 24% Off</span>
                <span className='text-xl text-teal-400'>  &emsp;&emsp;&emsp;$299.00</span>
            </section>
            <section className='bg-white border p-5 col-span-1 rounded'>
                <h2 className='font-bold text-sm'>FS - QUILTED MAXI <br/> CROSS BAG</h2>
                <img src={require('../images/b1.jfif')} className="w-56 h-48"/>
                <span className='line-through text-xs text-gray-400'>$534.34</span>
                <span className='text-red-500 font-bold text-xs'> 24% Off</span>
                <span className='text-xl text-teal-400'>  &emsp;&emsp;&emsp;$299.00</span>
            </section>
        </div>
  )
}

export default TopList;