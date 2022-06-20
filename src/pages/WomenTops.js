import React from 'react';
import './Product.css';
import Cards from '../components/Cards/Cards'
import { Breadcrums } from '../components/Breadcrums';
// import NavBar from '../components/Navbar/NavBar';

export const WomenTops = () => {
  return (
    <div>
      {/* <NavBar/> */}
      <Breadcrums/>
      <Cards/>
    </div>
  )
}
