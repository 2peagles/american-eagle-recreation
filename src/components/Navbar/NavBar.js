import React from 'react';
import './NavBar.css';
import { BsBag, BsSearch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdFavoriteBorder } from 'react-icons/md';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {WomenTops} from '../../pages/WomenTops';


export default function NavBar() {
  return (
    <>
      <div className='container'>
        <div className='promo-bar'>
          <li className='slide-show'>Free shipping on orders $75 + for Real Rewards members,plus so many more perks! <a href='/'>Shop Women </a> <a href='/'>Shop Mens</a><a href='/'>Sign In or Sign In</a></li>
          {/* <li><a href='/' className='tab'>Up to 40% off all short</a><a href='/'>Shop Womens</a> <a href='/'>Shop Mens</a></li> */}
        </div>
        <div className='main-bar' >
          <ol>
            <li><Link to='/'><BsSearch /></Link></li>
            <li><Link to='/'><MdFavoriteBorder /></Link></li>
            <li><Link to='/'><CgProfile /></Link></li>
            <li><Link to='/'><BsBag /></Link></li>
          </ol>
        </div>
        <div className='main-logo'>
          <h2>American Eagle</h2>
        </div>
        <div className='dropdown main-nav'>
          <button className='dropbtn'>New</button>
          <div className='dropdown-content'>
            <p>Women's</p>
            <hr></hr>
            <Link to='/' path='/tops'>Tops</Link>
            <Link to='/' path='/bottoms'>Bottoms</Link>
            <Link to='/'  path='/dresses'>Dresses</Link>
            <Link to='/' path='/shoe'>Shoe</Link>
            <Link to='/'  path='/accessories&socks'>Accessories & Socks</Link>
            <div className='dropdown-content'>
              <p>Mens</p>
              <hr></hr>
              <Link to='/'  path='/tops'>Tops</Link>
              <Link to='/'  path='/tops'>Bottoms</Link>
              <Link to='/' path='/tops'>Underwear</Link>
              <Link to='/' path='/accessories&socks'>Acceessories & Socks</Link>
              <Link to='/' path='/shoe'>Shoe</Link>
            </div>
          </div>
          <a href='/' className='dropbtn'>Women</a>
          <div className='dropdown-content'>
            <p>Catergories</p>
            <hr></hr>
            <Link to='/'>Tops</Link>
            <Link to='/'>Bottoms</Link>
            <Link to='/'>Jeans</Link>
            <Link to='/'>Dresses & Skirts</Link>
            <Link to='/'>Loungewear & PJs</Link>
            <Link to='/'>Match It Up</Link>
            <Link to='/'>Jackets</Link>
            <Link to='/'>Aries Bras & Braletttes</Link>
            <Link to='/'>Aries Undies</Link>
            <Link to='/'>Aries Swimsuits</Link>
            <Link to='/'>Aries Undies</Link>
            <Link to='/'>Acceessories & Socks</Link>
            <Link to='/'>Shoes</Link>
            <Link to='/'>Perfume</Link>
            <Link to='/'>Home</Link>
            <Link to='/'>Gifts & Tech</Link>
            <Link to='/'>Clearance</Link>
            <Link to='/'>Giftcards</Link>
            <div className='dropdown-content'>
              <p>Featured</p>
              <hr></hr>
              <Link to='/'>New Arrivals</Link>
              <Link to='/'>Online Only</Link>
              <Link to='/'>Best Sellers</Link>
              <Link to='/'>The Americana Shop</Link>
              <Link to='/'>Pride Day Shop</Link>
              <Link to='/'>The Reall Good: Planet in Mind</Link>
              <Link to='/' path='/brandswelove'>Brands We Love</Link>
            </div>
          </div>
        </div>
      </div>

      <Router>
        <Routes>
          {/* <Route exact path='/' element={<Home />} /> */}
          <Route path='/womentops' element={<WomenTops />} />
        </Routes>
      </Router>
    </>
  )
}