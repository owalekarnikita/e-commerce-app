import React from 'react';
import './App.css';
import SData from './components/context/SData';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import Contact from './components/Contact';
import Shoes from './components/pages/Shoes';

function App() {
  return (
    <SData>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/pages/Shoes' element={<Shoes/>} />
          <Route path='Contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </SData>

  );
}

export default App;
