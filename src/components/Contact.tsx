/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Search from './pages/Search';
import './scss/Navbar.css';

const Contact = () => {
  return (
    <div className='md:ml-20 md:mr-20'>
      <div>
        <h1 className='text-xl bg-gray-50 text-center p-2'>Home/Contact</h1>
      </div>
      <br/>
      <div className='grid md:grid-cols-2'>
        
        <section className='md:col-span-1 grid grid-cols-2 bg-sky-500 md:mr-20 md:ml-20'>
        <span className='circle bg-sky-500'></span>
          <span className='col-span-1'>
            <img src={require('./images/call.png')}/>
          </span>
          <span className='col-span-1 md:p-10 pt-5 text-white'>
            <h1 className='text-2xl font-bold '>Get In Touch</h1>
            <br/><br/><br/>
            contact@e-comm.ng
            <br/><br/>
            +234 4444 4434 66
            <br/><br/>
            20 Prince Hakerem Lekki <br/>
            Phase 1, Lagos
            <br/><br/>
          </span>

        </section>
        <section className='md:col-span-1 ml-5 xs:place-items-center'>
          <br/>
            Full Name <br/>
            <input type='name' className='p-2 border w-2/3 border-gray-500 rounded' placeholder='John Morrice'/><br/><br/>
            Email <br/>
            <input type='mail' className='p-2 border w-2/3 border-gray-500 rounded' placeholder='abc@gmail.com'/><br/><br/>
            Message <br/>
            <textarea className='p-2 border w-2/3 border-gray-500 rounded' placeholder='Enter message' rows={5}>
            </textarea>
          <br/>
        </section>
        
      </div>
      <br/>
      <Search />
      <br/>
    </div>
  )
}

export default Contact;