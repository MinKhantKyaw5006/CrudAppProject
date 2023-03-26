import React from 'react';
import './Auth.css';
import Logoimage from '../../img/gardenmate.png';

function Auth() {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logoimage} alt="" />
            <div className="Webname">
              <h1>Chrip Social Media</h1>
              <h5>  Bringing the world closer, with one connection at a time </h5>
            </div>
        </div>
        {/* <Signup/> */}
        <LogIn/>
    </div>
  );
}

function LogIn(){
  return(
    <div className="a-right">
    <form  className="infoForm authForm">
     <h3>Login In</h3>
    
     <div>
       <input type="text" placeholder='User Name' className='infoInput'
       name ='username' />
     </div>

    

     <div>
       <input type="text" placeholder='Confirm Passwood' className='infoInput'
       name ='confrim' />
     </div>
     <div className="">
       <span style={{fontSize: '14px'}}>Don't have an account? Sign up!</span>
     </div>
     <button className="button infoButton" type="submit">SignUp</button>

    </form>
   </div>
  )
}




function Signup(){
  return(
    <div className="a-right">
     <form  className="infoForm authForm">
      <h3>Sign Up</h3>
      <div>
        <input type="text" placeholder='First Name' className='infoInput'
        name ='firstname' />
      </div>
      <div>
        <input type="text" placeholder='Last Name' className='infoInput'
        name ='lastname' />
      </div>

      <div>
        <input type="text" placeholder='User Name' className='infoInput'
        name ='username' />
      </div>

      <div>
        <input type="text" placeholder='Enter Passwood' className='infoInput'
        name ='passwood' />
      </div>

      <div>
        <input type="text" placeholder='Confirm Passwood' className='infoInput'
        name ='confrim' />
      </div>
      <div className="">
        <span style={{fontSize: '14px'}}>Already have an account? Login!</span>
      </div>
      <button className="button infoButton" type="submit">SignUp</button>

     </form>
    </div>
  )

}

export default Auth;
