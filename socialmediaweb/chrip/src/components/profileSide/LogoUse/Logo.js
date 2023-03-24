import React from 'react';
import gardenmate from '../../../img/gardenmate.png';
import searchicon from '../../../img/searchicon.png';
import './Logo.css';
import { UilSearch } from '@iconscout/react-unicons';

function Logo() {
  return (
  <div className='LogoUse'>
    <img src={gardenmate} alt="" />

    <div className='Search'>
        <input type='text' placeholder='Search'/>
        <div className='searchIcon'>
          <UilSearch/>

        </div>
      </div>

  </div>
  );
}

export default Logo;


// import React from 'react';
// import { Icon } from '@iconscout/react-unicons';
// import gardenmate from '../../../img/gardenmate.png';
// import searchicon from '../../../img/searchicon.png';
// import { InputGroup, FormControl, Button } from 'react-bootstrap';
// import './Logo.css';

// function Logo() {
//     return (
//         <div className='LogoUse'>
//             <img src={gardenmate} alt="" />

//             <InputGroup className='Search'>
//                 <FormControl
//                     placeholder='Search'
//                     aria-label='Search'
//                 />
//                 <Button variant="light" className='searchButton'>
//                     <Icon icon={searchicon} size={20} />
//                 </Button>
//             </InputGroup>
//         </div>
//     );
// }

// export default Logo;
