/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AiOutlineShoppingCart} from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import "./scss/Navbar.css"

const Navbar = () => {
    
    const b:any = document.getElementById('hidden');
    function show() {
        b.style.display = 'block';
    }
    function hide() {
        b.style.display = 'none';
    }
  return (
    <div className='ml-10 mr-10 '>
            <div className='grid grid-cols-12'>
                <span className='col-span-2'>
                    <select className='p-1'>
                        <option>En</option>
                        <option>Fr</option>
                    </select>
                    <select className='p-1'>
                        <option>USD</option>
                        <option>Euro</option>
                    </select>
                </span>
                <span className='col-span-7'></span>
                <span className='col-span-3 flex'>
                    <span className='p-1 flex'><HiOutlineUser className='m-1'/>MyProfile</span>
                    <span className='p-2 pl-3'><AiOutlineShoppingCart /></span>
                    <span className='p-1 pl-3'>Items</span>
                    <span className='flex p-1 pl-3'><input type="search" placeholder="$ 0.00" className='w-16'/><BiSearch className='mt-1'/></span>
                </span>
            </div>
            <hr className='w-full'/>
            <div className='grid grid-cols-12'>
                <span className='col-span-2'>
                    <img src={require('./images/logo2.png')} className="w-28 h-10 m-2"/>
                </span>
                <span className='col-span-3'></span>
                <span className='col-span-7'>
                    <nav>
                        <ul className='flex float-right' onMouseEnter={()=> show()} onMouseLeave={()=> hide()}>
                            <li className='pl-5 pr-5 pt-2 font-bold ml-3 mr-3 nav'>HOME</li>
                            <li className='pl-5 pr-5 pt-2 font-bold ml-3 mr-3 nav'>BAGS</li>
                            <li className='pl-5 pr-5 pt-2 font-bold ml-3 mr-3 nav'>SNEAKERS</li>
                            <li className='pl-5 pr-5 pt-2 font-bold ml-3 mr-3 nav'>BELT</li>
                            <li className='pl-5 pr-5 pt-2 font-bold ml-3 mr-3 nav'>CONTACT</li>
                        </ul>
                    </nav>
                </span>
                </div>
                <div className='bg-white shadow mr-10 ml-80 p-5 hidden' id='hidden'>
                            <span className='grid grid-cols-9'>
                                <h3 className='text-gray-300 text-xl col-span-3 mr-3 ml-2 p-1'>Category</h3>
                                <h3 className='text-gray-300 text-xl col-span-3 mr-3 ml-2 p-1'>Category</h3>
                                <h3 className='text-gray-300 text-xl col-span-3 mr-3 ml-2 p-1'>Category</h3>
                            </span>
                            <span className='flex p-2'>
                            <ul className='mr-3 ml-2 p-1'>
                                <li>Coparate Shoes</li>
                                <li>Sneakers</li>
                                <li>Sandles</li>
                                <li>Sport Shoes</li>
                                <li>Trainers</li>
                            </ul>
                            <ul className='mr-3 ml-2 p-1'>
                                <li>Coparate Shoes</li>
                                <li>Sneakers</li>
                                <li>Sandles</li>
                                <li>Sport Shoes</li>
                                <li>Trainers</li>
                            </ul>
                            <ul className='mr-3 ml-2 p-1'>
                                <li>Coparate Shoes</li>
                                <li>Sneakers</li>
                                <li>Sandles</li>
                                <li>Sport Shoes</li>
                                <li>Trainers</li>
                            </ul>
                            <ul className='mr-3 ml-2 p-1'>
                                <li>Coparate Shoes</li>
                                <li>Sneakers</li>
                                <li>Sandles</li>
                                <li>Sport Shoes</li>
                                <li>Trainers</li>
                            </ul>
                            <ul className='mr-3 ml-2 p-1'>
                                <li>Coparate Shoes</li>
                                <li>Sneakers</li>
                                <li>Sandles</li>
                                <li>Sport Shoes</li>
                                <li>Trainers</li>
                            </ul>
                            </span>

                </div>       
    </div>
  )
}

export default Navbar;