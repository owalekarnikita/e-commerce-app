/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Shoes from './pages/Shoes';
import './scss/Navbar.css';

const Main = () => {
  return (
    <div>
        <div className='main text-5xl font-bold text-white p-10'>
            <span className='p-5'></span>
            <br/><br/>
            <span className='p-5'>Super Flash Sale </span><br/><br/>
            <span className='p-5'>50% Off</span><br/><br/>
            <span className='p-5'></span><br/>    
        </div>
        <div className='ml-48 mr-48 -mt-10 grid grid-cols-3'>
            <section className='bg-white border p-5 col-span-1 rounded'>
                <h2 className='font-bold text-sm'>FS - QUILTED MAXI <br/> CROSS BAG</h2>
                <img src={require('./images/b2.webp')} className="w-56 h-48"/>
                <span className='line-through text-xs text-gray-400'>$534.34</span>
                <span className='text-red-500 font-bold text-xs'> 24% Off</span>
                <span className='text-xl text-teal-400'>  &emsp;&emsp;&emsp;$299.00</span>
            </section>
            <section className='bg-white border p-5 col-span-1 rounded'>
                <h2 className='font-bold text-sm'>Nike Air max  <br/> 270 Shoes</h2>
                <img src={require('./images/s2.jpg')} className="w-56 h-48"/>
                <span className='line-through text-xs text-gray-400'>$534.34</span>
                <span className='text-red-500 font-bold text-xs'> 24% Off</span>
                <span className='text-xl text-teal-400'>  &emsp;&emsp;&emsp;$299.00</span>
            </section>
            <section className='bg-white border p-5 col-span-1 rounded'>
                <h2 className='font-bold text-sm'>FS - QUILTED MAXI <br/> CROSS BAG</h2>
                <img src={require('./images/b1.jfif')} className="w-56 h-48"/>
                <span className='line-through text-xs text-gray-400'>$534.34</span>
                <span className='text-red-500 font-bold text-xs'> 24% Off</span>
                <span className='text-xl text-teal-400'>  &emsp;&emsp;&emsp;$299.00</span>
            </section>
        </div>
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
                <Shoes/>   
                <br></br> 
            </div>
        </div>
        <br/><br/><br/>
        <div className='bg-sky-400 grid grid-cols-2'>
                    <section className='col-span-1 ml-20 text-white'>
                        <br/><br/><br/>
                        <h1 className='text-4xl pt-10 pb-10'>Adidas Men Running <br/> Sneakers</h1>
                           <h3 className=''> Performance and design. Taken right to the edge.</h3>
                            <h3 className='font-bold'> SHOP NOW</h3>
                    </section>
                    <section className='col-span-1 mr-10'>
                            <img src={require('./images/st.png')} className='-mt-20'/>
                    </section>
        </div>
        <br/>
    </div>
  )
}

export default Main;