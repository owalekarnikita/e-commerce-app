import React, { useState } from 'react';
import Banner from './Banner';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Shoes from './Shoes';
import Grid from './Grid';

const HotDeal = () => {
    const [act, setAct] =useState('true');
    const ab = () => {
        setAct('false');
    }
    const ba = () => {
        setAct('true');
    }
  return (
    <div>
        <div>
            <h1 className='text-xl bg-gray-50 text-center p-2'>Home/Hot-Deals</h1>
        </div>
        <br/>
        <div className='grid md:grid-cols-4 sm:grid-cols-1 gap-2'>
            <section className='col-span-1 md:ml-10 md:mr-10'>
                <div className='bg-gray-100 p-5 rounded'>
                    <h3 className='text-xl font-semibold'>Hot Deals</h3><br/>
                    <span>
                        Nike <span className='float-right'> 2</span><br/><br/>
                        Airmax <span className='float-right'> 15</span><br/><br/>
                        Adidas <span className='float-right'> 10</span><br/><br/>
                        Allstars <span className='float-right'> 20</span><br/><br/>
                        Nike <span className='float-right'> 2</span><br/><br/>
                        Airmax <span className='float-right'> 15</span><br/><br/>
                        Allstars <span className='float-right'> 20</span><br/><br/>
                    </span>
                </div>
                <br/>
                <div className='bg-gray-200 p-5 rounded'>
                    <h3 className='text-xl font-semibold'> Prices </h3>
                    <br/>
                    <span>
                        Ranger <span className='float-right'>$12.99-$25.99</span>
                    </span>
                    <br/>
                    <span>
                        <input type='range' className='w-full p-5 bg-blue-400 h-1'/>
                    </span>
                </div>
                <br/>
                <div className='bg-gray-200 p-5 rounded sm:hidden'>
                    <h3 className='text-xl font-semibold'> Brand </h3>
                        Nike <span className='float-right'> 99</span><br/><br/>
                        Airmax <span className='float-right'> 99</span><br/><br/>
                        Adidas <span className='float-right'> 99</span><br/><br/>
                        Allstars <span className='float-right'> 99</span><br/><br/>
                </div>
                <br/>
                <div className='bg-gray-200 p-5 rounded text-center font-semibold'>
                    More
                </div>

            </section>

            <section className='md:col-span-3 sm:col-span-1'>
                <Banner />
                <br/>
                <div className='bg-gray-100 p-5 rounded'>
                    <ul className='md:flex'>
                        <li className='p-1 pl-5 pr-5'> 13 Items</li>
                        <li className='p-1 pl-5 pr-5'>Sort By </li>
                        <li className='p-1 pl-5 pr-5'> Name</li>
                        <li className='p-1 pl-5 pr-5'><MdOutlineArrowDropDown /></li>
                        <li className='p-1 pl-5 pr-5'> Show </li>
                        <li className='p-1 pl-5 pr-5'> 12 </li>
                        <li className='p-1 pl-5 pr-5'><MdOutlineArrowDropDown /></li>
                        <span className='flex float-right'>
                            <li className='p-1 pl-5 pr-5' onClick={ba}><BsGrid3X3GapFill /> </li>
                            <li className='p-1 pl-5 pr-5' onClick={ab}><GiHamburgerMenu /></li>
                        </span>
                    </ul>
                </div>
                <div>
                    <br/>
                    {act === 'true' ? <Shoes /> : <Grid />}
                </div>

            </section>

        </div>
    </div>
  )
}

export default HotDeal;