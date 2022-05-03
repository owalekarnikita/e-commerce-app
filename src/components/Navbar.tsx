/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AiOutlineShoppingCart,AiOutlineHome,AiOutlineSearch,AiOutlineTag,AiOutlineUser,AiOutlineHeart,AiOutlineBell} from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import "./scss/Navbar.css"
import NavHover from './pages/NavHover';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    
    // const b:any = document.getElementById('hidden');
    // function show() {
    //     b.style.display = 'block';
    // }
    // function hide() {
    //     b.style.display = 'none';
    // }
  return (
    <div className='ml-10 mr-10 '>
            <div className='md:grid-cols-12 sm:grid hidden'>
                <span className='col-span-6'>
                    <select className='p-1'>
                        <option>En</option>
                        <option>Fr</option>
                    </select>
                    <select className='p-1'>
                        <option>USD</option>
                        <option>Euro</option>
                    </select>
                </span>
                <span className='col-span-6 flex place-content-end'>
                    <span className='p-1 flex'><HiOutlineUser className='m-1'/>MyProfile</span>
                    <span className='p-2 pl-3'><AiOutlineShoppingCart /></span>
                    <span className='p-1 pl-3'>Items</span>
                    <span className='flex p-1 pl-3'><input type="search" placeholder="$ 0.00" className='w-16'/><BiSearch className='mt-1'/></span>
                </span>
            </div>
            <hr className='w-full'/>
            <div className='md:grid-cols-12 sm:grid hidden '>
                <span className='col-span-4 sm:place-content-center md:place-content-start'>
                    <img src={require('./images/logo2.png')} className="w-28 h-10 m-2"/>
                </span>
                <span className='col-span-8'>
                    <nav id='nav'>
                        <ul className='md:flex sm:grid hidden md:float-right place-content-center' id='ul'>
                            <li className='pl-5 pr-5 pt-2 font-bold ml-3 mr-3 nav'><NavLink to='/'>HOME</NavLink></li>
                            <li className='pl-5 pr-5 pt-2 font-bold ml-3 mr-3 nav'><NavLink to='/'>BAGS</NavLink></li>
                            <li className='pl-5 pr-5 pt-2 font-bold ml-3 mr-3 nav'><NavLink to='pages/Shoes'>SNEAKERS</NavLink></li>
                            <li className='pl-5 pr-5 pt-2 font-bold ml-3 mr-3 nav'><NavLink to='/'>BELT</NavLink></li>
                            <li className='pl-5 pr-5 pt-2 font-bold ml-3 mr-3 nav'><NavLink to='Contact'>CONTACT</NavLink></li>
                        </ul>
                    </nav>
                    <NavHover /> 
                </span>
            </div>
            <div className='grid grid-cols-5 p-1 md:hidden'>
                <input type='search' placeholder=' Search' className='p-1 pl-2 pr-2 border col-span-4 w-full'/> 
                <span className='col-span-1 flex'><AiOutlineHeart className='text-3xl p-1'/>
                <AiOutlineBell className='text-3xl p-1'/></span>
            </div>
            <nav className='md:hidden fixed bg-white' id='btnav'>
                        <ul className='grid grid-cols-5 p-2'>
                            <li className='col-span-1'><AiOutlineHome className='ml-2'/><span className='text-xs'><NavLink to='/'>Home</NavLink></span></li>
                            <li className='col-span-1'><AiOutlineSearch className='ml-2'/><span className='text-xs'><NavLink to='/'>Explore</NavLink></span></li>
                            <li className='col-span-1'><AiOutlineShoppingCart className='ml-1'/><span className='text-xs'><NavLink to='/'>Cart</NavLink></span></li>
                            <li className='col-span-1'><AiOutlineTag className='ml-2'/><span className='text-xs'><NavLink to='/'>Other</NavLink></span></li>
                            <li className='col-span-1'><AiOutlineUser className='ml-3'/><span className='text-xs'><NavLink to='/'>Account</NavLink></span></li>
                        </ul>
            </nav>
                   
    </div>
  )
}

export default Navbar;