import React from 'react';
// import boat from '../../Images/boat.jpg'
import './Hero.css';

export const Hero = ( ) => {
  return (
    <div className='body'>
        <div className='items'>
           <div className='contentImg'>hi</div>
                <div className='content'>
                    <h1>ALL Shorts On Sale</h1>
                        <h5><b> Up to 40% Off! </b></h5>
                            <button className='hero-btn'><a href='/'> Shop Women</a></button>
                            <button className='hero-btn'><a href='/'>  Shop Men </a></button>
                             <p>Limited Time: online only. Prices as marked. </p>
                </div>
            </div>
            <div className='home-container'>
            <div className='mid-section'>
                <h1>Up to 50% Off Everything</h1>
                <button className='mid-btn'><a href='/'>Shop Women</a></button>
                <button className='mid-btn'><a href='/'>Shop Men</a></button>
                <button className='mid-btn'><a href='/'>Shop Clearance</a></button>
                <p>Limted time:online only .Prices as marked</p>
            </div>
            </div>
            <div className='home-container'>
                <div className='contentTop'>
                    <h1>Fresh Summer Arrivals</h1>
                    <p>Nothing says "hello, sunshine" like summer-ready shorts,easy-breezy shirts & flowy dresses.</p>
                    <button className='top-btn'><a  a href='/'>Women's New Arrivals</a></button>
                    <button  className='top-btn'> <a  a href='/'>Men's New Arrivals</a></button>
                 </div>
                 <div className='contentleft'>
                    <h3>Dresses for Daaays</h3>
                    <p>From mini to maxi, basic to bold ... Find a dress for every occasion.</p>
                    <a href="/">Shop Now</a>
                    </div>
                 <div className='contentright'>
                    <h3>Need-Now Graphics</h3>
                    <p>From beachy, retro designs in neutral hues to new, limited-edition Pride tees.</p>
                    <a href="/">Shop Now</a>
                    </div>
                    </div>
                    <div className='home-container'>
                    <div className='midcontent'>
                        <div className='contentmidl'>
                            <h1>The Pride Shop</h1>
                            <p>Featuring an exclusive , limited-edition collection designed in collaboration wwith mxmtoon.</p>
                            <button className='mid-btn'><a href='/'>Shop Now </a></button>
                            <button className='mid-btn'><a href='/'>Learn More </a></button>
                        </div>
                        <div className='contentmidr'>
                            <p>Through her diverse work as a musician, activist & all-around creative entrepreneur, she modesl a new way of being an artist in the modern world.</p>
                        </div>
                    </div>
                    </div>
                    <div className='home-container'>
                    <div className='bottom-content'>
                        <p>Show us how you wear it!</p>
                        <div className='reviewImgs'>IMG SLIDE SHOW HERE</div>
                        <p>Tag <b>@americaneagle #AEJeans</b> & you could be featured right here</p>
                        <button className='reviewbtn'>ADD YOUR PHOTO </button>
                        <button className='reviewbtn'>VIEW GALLERY </button>
                    </div>
                 </div>
    </div>
  )
}