/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Banner = () => {
  return (
    <div className='bg-sky-400 grid md:grid-cols-2 sm:grid-cols-1'>
                    <section className='col-span-1 ml-20 text-white'>
                        <br/><br/><br/>
                        <h1 className='font-bold text-4xl pt-10 pb-10'>Adidas Men Running <br/> Sneakers</h1>
                           <h3 className=''> Performance and design. Taken right to the edge.</h3>
                            <h3 className='font-bold'> SHOP NOW</h3>
                    </section>
                    <section className='col-span-1 mr-10'>
                            <img src={require('../images/st.png')} className='md:-mt-20 sm:mt-2'/>
                    </section>
        </div>
  )
}

export default Banner;