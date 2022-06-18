import React from 'react';
import { BsBag, BsSearch } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { MdFavoriteBorder } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Search.css'

export const Search = () => {
    return (
        <div className='main-container'>
            <div className='main-bar'>
                <div className='store active' >
                    <Link to='/' className='link'>American Eagle</Link>
                </div>
                <div className='store' >
                    <Link to='/' className='link'>Aerie</Link>
                 </div>
                <Link to='/' className='link'>
                    <BsSearch />
                </Link>
                <Link to='/Favorites' className='link icon'>
                    <MdFavoriteBorder />
                </Link>
                <Link to='/Profile' className='link icon'>
                    <CgProfile />
                </Link>
                <Link to='/Cart' className='link icon'>
                    <BsBag />
                </Link>
            </div>
        </div>
    )
}
