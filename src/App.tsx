import React from 'react';
import './App.css';
import SData from './components/context/SData';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <SData>
      <div>
        <Navbar />
        <Main />
        <Footer/>
      </div>
    </SData>

  );
}

export default App;
