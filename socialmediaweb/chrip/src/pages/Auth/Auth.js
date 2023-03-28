import React, { useState } from 'react';
import './Auth.css';
import Logoimage from '../../img/gardenmate.png';
import {useDispatch} from 'react-redux';
import { logIn, signUp } from '../../actions/AuthAction';

function Auth() {
  const [isSignup, setIsSignup] = useState(true)
  const dispatch = useDispatch()
  const [data, setData] = useState({ firstname: "", lastname: "", passwood: "", confirm: "", username: "" })
  const [confirmPass, setConfirmPass] = useState(true)


  const handleSubmit =(e)=>{
    e.preventDefault();

    if(isSignup){
      // if(data.passwood !== data.confirm){
      //   setConfirmPass(false)
      data.passwood ===data.confirm 
      ? dispatch(signUp (data)) 
      : setConfirmPass(false)
      }else
      {dispatch (logIn(data))}
    
  }

  const reseForm =()=>{
    setConfirmPass(true);
    setData({firstname: "", lastname: "", passwood: "", confirm: "", username: ""})
  }


  //singal function for all inputs
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  return (

    <div className="Auth">
      {/*left side of page */}
      <div className="a-left">
        <img src={Logoimage} alt="" />
        <div className="Webname">
          <h1>Chrip Social Media</h1>
          <h5>  Bringing the world closer, with one connection at a time </h5>
        </div>
      </div>
      {/* <Signup/> */}
      {/* <LogIn/> */}


      {/*right side of page */}

      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignup ? "Sign Up" : "Log In"}</h3>

          {isSignup && (
            <div>

              {/*maybe put in div */}
              <div>
                <input type="text" placeholder='First Name' className='infoInput'
                  name='firstname' onChange={handleChange} value={data.firstname}/>
              </div>

              <div>
                <input type="text" placeholder='Last Name' className='infoInput'
                  name='lastname' onChange={handleChange} value={data.lastname}/>
              </div>





            </div>)}





          <div>
            <input type="text" placeholder='User Name' className='infoInput'
              name='username' onChange={handleChange} value={data.username}/>
          </div>

          <div>
            <input type="password" placeholder='Enter Passwood' className='infoInput'
              name='passwood' onChange={handleChange} value={data.passwood}/>
          </div>


          {isSignup && (
            <div>
              <input type="password" placeholder='Confirm Passwood' className='infoInput'
                name='confirm' onChange={handleChange} value={data.confirm}/>
            </div>
          )}

          <span style={{ display: confirmPass ? "none" : "block", color: 'red', fortSize: '12px', alignSelf: "center", marginRight: "5px" }}>*Confirm Password is not same</span>



          <div className="">
            <span style={{ fontSize: '14px', cursor: "pointer" }} onClick={() => {setIsSignup((prev) => !prev); reseForm()}} >
              {isSignup ? "Already have an account? Login!" : "Don't have an account? Sign Up"}
            </span>
          </div>
          <button className="button infoButton" type="submit">{isSignup ? "Sign Up" : "Log In"}</button>

        </form>
      </div>


    </div>
  );
}

// function LogIn() {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Login In</h3>

//         <div>
//           <input type="text" placeholder='User Name' className='infoInput'
//             name='username' />
//         </div>



//         <div>
//           <input type="text" placeholder='Confirm Passwood' className='infoInput'
//             name='confrim' />
//         </div>
//         <div className="">
//           <span style={{ fontSize: '14px' }}>Don't have an account? Sign up!</span>
//         </div>
//         <button className="button infoButton" type="submit">SignUp</button>

//       </form>
//     </div>
//   )
// }




// function Signup() {
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm">
//         <h3>Sign Up</h3>
//         <div>
//           <input type="text" placeholder='First Name' className='infoInput'
//             name='firstname' />
//         </div>
//         <div>
//           <input type="text" placeholder='Last Name' className='infoInput'
//             name='lastname' />
//         </div>

//         <div>
//           <input type="text" placeholder='User Name' className='infoInput'
//             name='username' />
//         </div>

//         <div>
//           <input type="text" placeholder='Enter Passwood' className='infoInput'
//             name='passwood' />
//         </div>

//         <div>
//           <input type="text" placeholder='Confirm Passwood' className='infoInput'
//             name='confrim' />
//         </div>
//         <div className="">
//           <span style={{ fontSize: '14px' }}>Already have an account? Login!</span>
//         </div>
//         <button className="button infoButton" type="submit">SignUp</button>

//       </form>
//     </div>
//   )

// }

export default Auth;
