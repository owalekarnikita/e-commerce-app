/* eslint-disable jsx-a11y/alt-text */
import React,{useContext} from 'react';
import { BagsContext } from '../context/BagData';

const Bags = () => {
  const {bagList} = useContext(BagsContext);
  return (
    <div className='grid md:grid-cols-12 sm:grid-cols-3 gap-5 ml-10 mr-10'>
      {bagList.map((bag) => {
        return(
          <div className ='h-auto col-span-3 text-center border p-2' key={bag.id}>
            <img src={bag.img} className="w-full h-72"/>
            <h3 className='font-bold'>{bag.name}</h3>
            <p>stars</p>
            <p> <span className='text-teal-300 font-bold'> ${(bag.price/100)*66} </span>
            <span className='line-through'>${bag.price}</span> 
            <span className='text-red-600'> 24% Off </span></p>
          </div>
        );
      })}
    </div>
  )
}

export default Bags;