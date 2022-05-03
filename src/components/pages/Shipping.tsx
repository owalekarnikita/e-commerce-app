import React from 'react';
import {FaShippingFast} from "react-icons/fa";
import { RiRefund2Fill} from "react-icons/ri";

const Shipping = () => {
  return (
    <div className='md:ml-10 md:mr-10 text-center grid md:grid-cols-3 xs:grid-cols-1 gap-1'>
            <section className='col-span-1 text-center pl-28 pr-28'>
                <FaShippingFast className='items-center text-5xl md:ml-20 ml-10 text-red-400'/>
                <br/>
                <h2 className='uppercase font-bold'>Free Shipping</h2>
                <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nostrum nisi mollitia distinctio.</p>
                <br/>
            </section>
            <section className='col-span-1 text-center pl-28 pr-28'>
                <RiRefund2Fill className='items-center text-5xl md:ml-20 ml-10 text-red-400'/>
                <br/>
                <h2 className='uppercase font-bold'>Free Shipping</h2>
                <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nostrum nisi mollitia distinctio.</p>
                <br/>
            </section>
            <section className='col-span-1 text-center pl-28 pr-28'>
                <FaShippingFast className='items-center text-5xl md:placeholder:ml-20 ml-10 text-red-400'/>
                <br/>
                <h2 className='uppercase font-bold'>Free Shipping</h2>
                <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nostrum nisi mollitia distinctio.</p>
                <br/>
            </section>
        </div>
  )
}

export default Shipping;