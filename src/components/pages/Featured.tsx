/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AiTwotoneStar } from "react-icons/ai";

const Featured = () => {
  return (
    <div className='ml-10 mr-10 text-center'>
            <h1 className='uppercase font-bold'>Featured products</h1>
            <br/>
            <div className=' grid md:grid-cols-3 sm:grid-cols-1 gap-1'>
                <section className='col-span-1 text-center md:pl-28 md:pr-28'>
                    <div className='grid grid-cols-2'>
                        <img src={require('../images/shoe.jfif')} className='col-span-1'/>
                        <span className='col-span-1'>
                            <h3 className='text-sm'>Blue Swade Nike Shoes</h3>
                            <span className='flex text-yellow-400 ml-2 text-sm'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></span>
                            <span>
                                <span className='text-red-300'>$499 </span>
                                <span className='line-through'>$599</span>
                            </span>
                        </span>
                    </div>
                </section>
                <section className='col-span-1 text-center md:pl-28 md:pr-28'>
                    <div className='grid grid-cols-2'>
                        <img src={require('../images/shoe.jfif')} className='col-span-1'/>
                        <span className='col-span-1'>
                            <h3 className='text-sm'>Blue Swade Nike Shoes</h3>
                            <span className='flex text-yellow-400 ml-2 text-sm'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></span>
                            <span>
                                <span className='text-red-300'>$499 </span>
                                <span className='line-through'>$599</span>
                            </span>
                        </span>
                    </div>
                </section>
                <section className='col-span-1 text-center md:pl-28 md:pr-28'>
                    <div className='grid grid-cols-2'>
                        <img src={require('../images/shoe.jfif')} className='col-span-1'/>
                        <span className='col-span-1'>
                            <h3 className='text-sm'>Blue Swade Nike Shoes</h3>
                            <span className='flex text-yellow-400 ml-2 text-sm'><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /></span>
                            <span>
                                <span className='text-red-300'>$499 </span>
                                <span className='line-through'>$599</span>
                            </span>
                        </span>
                    </div>
                </section>
            </div>
        </div>
  )
}

export default Featured;