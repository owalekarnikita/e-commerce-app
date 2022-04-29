/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import { ShoesContext } from '../context/ShoesData';

const Shoes = () => {
  const {shoeList} = useContext(ShoesContext);
  return (
    <div className='grid grid-cols-12 gap-5 ml-10 mr-10'>
      {shoeList.map((shoe, index) => {
        return(
          <div className ='h-auto col-span-3 text-center border p-2' key={index}>
            <img src={shoe.img} className="w-full h-56"/>
            <h3 className='font-bold'>{shoe.name}</h3>
            <p>stars</p>
            <p> <span className='text-teal-300 font-bold'> ${(shoe.price/100)*66} </span>
            <span className='line-through'>${shoe.price}</span> 
            <span className='text-red-600'> 24% Off </span></p>
          </div>
        );
      })}
      </div>
  )
}

export default Shoes;