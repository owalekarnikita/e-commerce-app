/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import './scss/Navbar.css';

const Footer = () => {
  return (
    <div className='bg-blue-300'>
        <footer className='ml-10 mr-10'>
            <br />
            <section className='grid grid-cols-10'>
                <div className='col-span-4 p-10'>
                    <img src={require('./images/logo2.png')} />
                    <p className='text-xs p-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam a praesentium voluptates at, quidem vero quos dignissimos eveniet accusantium non corporis architecto recusandae sit omnis asperiores distinctio.</p>
                </div>
                <div className='col-span-3 p-10'>
                <h2 className='font-bold'> Follow Us</h2><br/>
                <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto eaque suscipit fugit voluptatem officia corrupti!</p>
                
                <span className='flex'>
                <FaFacebookF className='text-blue-600 m-1 mt-2'/>
                <BsTwitter className='text-blue-600 m-1 mt-2'/>
                </span>
                </div>
                <div className='col-span-3 p-10'>
                    <h2 className='font-bold'>Contact Us</h2><br/>
                    <p className='text-sm'>E-comm, 4578<br/>
                    Marmora Road,<br/>
                    Glasgow D04 89GR
                    </p>
                </div>
            </section>
            
            <section className='grid grid-cols-12'>
                <div className='col-span-3 p-10'>
                    <h2 className='text-xl nav'>Information</h2>
                    <br/>
                    <ul className='text-sm'>
                        <li>About Us</li>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className='col-span-3 p-10'>
                    <h2 className='text-xl nav'>Service</h2>
                    <br/>
                    <ul className='text-sm'>
                        <li>About Us</li>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className='col-span-3 p-10'>
                    <h2 className='text-md nav'>My Account</h2>
                    <br/>
                    <ul className='text-sm'>
                        <li>About Us</li>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className='col-span-3 p-10'>
                    <h2 className='text-md nav'>Our Offers</h2>
                    <br/>
                    <ul className='text-sm'>
                        <li>About Us</li>
                        <li>Information</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </section>
            <hr />
            <br/>
            <section className='grid grid-cols-12'>
            <span className='flex col-span-3'></span>
            <span className='flex col-span-3'></span>
            <span className='flex col-span-3'></span>
            <span className='flex col-span-3'>
                <img src={require('./images/wsunion.png')} className="w-12 p-1" />
                <img src={require('./images/card.png')} className="w-12 p-1" />
                <img src={require('./images/paypal.png')} className="w-12 p-1" />
                <img src={require('./images/visa.png')} className="w-12 p-1" />
            </span>
            </section>
            <br/>
        </footer>
    </div>
  )
}

export default Footer;