import React from 'react';
import {Typewriter}  from 'react-simple-typewriter';

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-info'>
            <h1>Web Development Infomation</h1>
            <span className='typed-text'>
            <Typewriter
             loop 
             cursor
             cursorStyle= "|"
             typeSpeed={70}
             deleteSpeed={50}
             delaySpeed={1000}
             words={["devloper" ,"designer" , "graphic designer" , "facebook add SSM"]}
             />
            </span>
            < a href = "#" className='main-offer-btn'>Contact Me</a>
        </div>
    </div>
  )
}

export default Header ;