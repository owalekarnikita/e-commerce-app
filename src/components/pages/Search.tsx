import React from 'react';

const Search = () => {
  return (
    <div className='md:ml-10 md:mr-10 text-center'>
            <input type="search" className='md:p-4 p-2 text-md border pl-10 pr-10' placeholder='SEARCH'/>
            <button className='md:p-4 p-2 text-md bg-blue-500 text-white border'>SEARCH</button>
    </div>
  )
}

export default Search;