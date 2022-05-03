/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const LatestNews = () => {
  return (
    <div className='ml-10 mr-10 text-center'>
            <h1 className='uppercase font-bold'>latest News</h1>
            <br/>
            <div className='grid md:grid-cols-3 xs:grid-cols-1 md:ml-10 md:mr-10 gap-2'>
                <section className='col-span-1 p-2'>
                    <div className='grid grid-cols-2 p-2'>
                        <img src={require('../images/nike.png')} className='col-span-1 p-5 pt-0'/>
                        <span className='text-left col-span-1'>
                            <span className='text-sm text-gray-300'>1 January 2015</span>
                            <h3 className='uppercase text-md font-bold'> fashion industry</h3>
                            <p className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, necessitatibus. Adipisci iure enim voluptatibus dicta.</p>
                        </span>
                    </div>
                </section>
                <section className='col-span-1'>
                    <div className='grid grid-cols-2 p-2'>
                        <img src={require('../images/nike.png')} className='col-span-1 p-5 pt-0'/>
                        <span className='text-left col-span-1'>
                            <span className='text-sm text-gray-300'>1 January 2015</span>
                            <h3 className='uppercase text-md font-bold'> best design tools</h3>
                            <p className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, necessitatibus. Adipisci iure enim voluptatibus dicta.</p>
                        </span>
                    </div>
                </section>
                <section className='col-span-1'>
                    <div className='grid grid-cols-2 p-2'>
                        <img src={require('../images/nike.png')} className='col-span-1 p-5 pt-0'/>
                        <span className='text-left col-span-1'>
                            <span className='text-sm text-gray-300'>1 January 2015</span>
                            <h3 className='uppercase text-md font-bold'>hr community</h3>
                            <p className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, necessitatibus. Adipisci iure enim voluptatibus dicta.</p>
                        </span>
                    </div>
                </section>
            </div>
        </div>
  )
}

export default LatestNews