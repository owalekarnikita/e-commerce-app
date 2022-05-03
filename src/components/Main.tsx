/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import TopList from './pages/TopList';
import './scss/Navbar.css';
import Shipping from './pages/Shipping';
import Banner from './pages/Banner';
import LatestNews from './pages/LatestNews';
import BestSeller from './pages/BestSeller';
import Featured from './pages/Featured';
import MainBanner from './pages/MainBanner';
import Search from './pages/Search';

const Main = () => {
  return (
    <div>
        <MainBanner />
        <TopList />
        <BestSeller />
        <br/><br/><br/>
        <Banner />
        <br/>
        <Shipping />
        <br/><br/>
        <LatestNews />
        <br></br>
        <Featured />
        <br/>
        <br/>
        <Search />
        <br/>
    </div>
  )
}

export default Main;