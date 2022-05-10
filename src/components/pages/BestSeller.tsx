import React from 'react';
import Shoes from './Shoes';

const BestSeller = () => {

  const a = function() {
    const b:any = document.getElementById('hide');
    b.style.display ='block';
  }
  return (
    <div className='ml-10 mr-10 text-center'>
            <h2 className='p-2 font-bold text-xl'>BEST SELLER</h2>
            <ul className='flex place-content-center p-1'>
                <li className='p-1 pr-2 pl-2 nav'>All</li>
                <li className='p-1 pr-2 pl-2 nav'>Bags</li>
                <li className='p-1 pr-2 pl-2 nav'>Sneakers</li>
                <li className='p-1 pr-2 pl-2 nav'>Belt</li>
                <li className='p-1 pr-2 pl-2 nav'>Sunglasses</li>
            </ul>
            <div className=''>
                <Shoes/> <br/>
                <div className='hidden' id='hide'>
                    <Shoes />
                </div>
                <button className='text-sm font-bold underline' onClick={a}>Learn More </button>  
                <br/> 
            </div>
    </div>
  )
}

export default BestSeller;