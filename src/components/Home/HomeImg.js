import React from 'react';
import { BsBag } from 'react-icons/bs';
import { Link }  from 'react-router-dom';
import './HomeImg.css';

export const HomeImg = () => {
  return (
    <div className='homeImg'>
      <div className='home-icon'>
        <Link to='/Cart'>
          <BsBag />
        </Link>
      </div>
      <div className='home-one'>
        <h1> 25% Off All Online-Only Styles</h1>
        <p>Plus, take an extra 15% off everything!</p>
          <button>
            <a href='/'>Shop Women</a>
          </button>
          <button>
            <a href='/'>Shop Men</a>
         </button>
        <h6>Limited time.Excludes jeggings.Aerie & other items.Prices as marked.Extra 15% off reflected in cart.
          <a href="/">Details</a>
      </h6>
      </div>
    </div>
  )
}
