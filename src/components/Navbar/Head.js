import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './Head.css';

export const Head = () => {
  return (
    <div className='head'>
      <Carousel>
      <Carousel.Item>
        <p>25% off all online-only styles! Plus, take  an extra 15% off EVERYTHING! <Link to='/' className='promo-link'>Shop Women</Link> <Link to='/' className='promo-link'> Shop Men</Link> <Link to='/' className='promo-link'>Details</Link></p>
        </Carousel.Item>
        <Carousel.Item>
        <p>All short on sale-up to 40% off ! <Link to='/' className='promo-link'>Shop Women</Link> <Link to='/' className='promo-link'>Shop Men</Link></p>
        </Carousel.Item>
        <Carousel.Item>
        <p>Free shipping on orders $75+ for Real Rewards members, plus so many more perks! <Link to='/' className='promo-link'>Sign In Or Sign Up</Link> <Link to='/' className='promo-link'>Details</Link></p>
        </Carousel.Item>
        </Carousel>
    </div>
  )
}
