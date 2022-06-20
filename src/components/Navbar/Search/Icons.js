import React from 'react'
import { BsBag, BsSearch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Icons = () => {
  return (
    <div className='icon'>
            <a href='/SearchPopUp' className='link'>
                <BsSearch />
            </a>
            <Link to='/Profile' className='link'>
                <CgProfile />
            </Link>
            <Link to='/Favorites' className='link'>
                <MdFavoriteBorder />
            </Link>
            <Link to='/Cart' className='link'>
                <BsBag />
            </Link>      
    </div>
  )
}
