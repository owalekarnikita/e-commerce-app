/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import { ShoesContext } from '../context/ShoesData';
import '../scss/Navbar.css';

const Shoes = () => {
  const {shoeList} = useContext(ShoesContext);
  return (
    <div className='grid md:grid-cols-12 sm:grid-cols-3 gap-5 ml-10 mr-10' id='hovershoe'>
      {shoeList.map((shoe, index) => {
        return(
          <div className ='h-auto col-span-3 text-center border p-2' key={index}>
            <img src={shoe.img} className="w-full h-72"/>
            <h3 className='font-bold'>{shoe.name}</h3>
            <p>stars</p>
            <p> <span className='text-teal-300 font-bold'> ${(shoe.price/100)*66} </span>
            <span className='line-through'>${shoe.price}</span> 
            <span className='text-red-600'> 24% Off </span></p>
          </div>
        );
      })}
      <br/>
      </div>
  )
}

export default Shoes;