/* eslint-disable jsx-a11y/alt-text */
import React,{useContext} from 'react';
import { ShoesContext } from '../context/ShoesData';
import { AiFillStar,AiOutlineStar,AiOutlineHeart } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";

const Grid = () => {
    const {shoeList} = useContext(ShoesContext);
  return (
    <div>
        {shoeList.map((shoe,index)=>{
            return (
               <div>
               <div className='grid grid-cols-3' key={index}>
                    <span className='md:col-span-1 p-5 place-items-center'>
                        <img src={shoe.img} className='h-72'/>
                    </span>
                    <span className='col-span-2 p-5'>
                        <span className='text-2xl font-semibold'>{shoe.name}</span>
                        <br/><br/>
                        <span className='flex'> 
                            <span className='text-yellow-400 flex mt-1'><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiOutlineStar /></span>
                            &nbsp; 0 Reviews &nbsp;&nbsp;<a href='./' className='text-sky-500 text-sm'>Submit a review</a>
                        </span>
                        <br/>
                        <hr/><br/>
                        <span className='font-semibold'> 
                            <span className='text-sky-500 text-xl'>${(shoe.price/100)*66}</span> &nbsp;
                            <span className='line-through'>${shoe.price} </span> &nbsp;
                            <span className='text-red-400'>24% Off </span>
                        </span>
                        <br/><br/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex quae autem? maiores rem praesentium iste at dolore nesciunt quis doloremque odio a exercitationem nisi, sed odit?
                        </p>
                        <br/>
                        <div>
                            <button className='p-2 text-sky-500 bg-sky-100 pr-4 pl-4 rounded'>
                                <span className='flex'><IoCartOutline className='mt-1'/> &nbsp;Add to Cart </span>
                            </button> &nbsp;&nbsp;
                            <button className='p-3 text-sky-500 bg-sky-100 rounded'>
                                <AiOutlineHeart />
                            </button>
                        </div>

                    </span>
                </div>
                <hr/>
            </div>
            )
        })}
        
    </div>
  )
}

export default Grid;