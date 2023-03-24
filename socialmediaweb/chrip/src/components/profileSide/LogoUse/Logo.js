import React from 'react';
import gardenmate from '../../../img/gardenmate.png';
import searchicon from '../../../img/search.png';
import './Logo.css';


function Logo() {
  return (
  <div className='LogoUse'>
    <img src={gardenmate} alt="" />

    <div className='Search'>
        <input type='text' placeholder='Search'/>
        <div className='searchIcon'>
          <img src={searchicon} alt='Search' />
        </div>
      </div>
   
  </div>
  );
}

export default Logo;
