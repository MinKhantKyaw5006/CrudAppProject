

// export const logIn = (formData) => async(dispatch) => {
//     dispatch({type: "AUTH_START"})
//     try {
//         const {data} = await AuthApi.logIn(formData)
//         dispatch({type: "AUTH_SUCCESS", data: data})
        
//     } catch (error) {
//         console.log(error)
//         dispatch({type: "AUTH_FAIL"})

        
//     }
    
// }


// export const signUp = (formData) => async(dispatch) => {
//     dispatch({type: "AUTH_START"})
//     try {
//         const {data} = await AuthApi.signUp(formData)
//         dispatch({type: "AUTH_SUCCESS", data: data})
        
//     } catch (error) {
//         console.log(error)
//         dispatch({type: "AUTH_FAIL"})

        
//     }
    
// }


// function logIn(formData) {
//     return async function(dispatch) {
//       dispatch({type: "AUTH_START"})
//       try {
//         const {data} = await AuthApi.logIn(formData)
//         dispatch({type: "AUTH_SUCCESS", data: data})
//       } catch (error) {
//         console.log(error)
//         dispatch({type: "AUTH_FAIL"})
//       }
//     }
//   }
  
//   function signUp(formData) {
//     return async function(dispatch) {
//       dispatch({type: "AUTH_START"})
//       try {
//         const {data} = await AuthApi.signUp(formData)
//         dispatch({type: "AUTH_SUCCESS", data: data})
//       } catch (error) {
//         console.log(error)
//         dispatch({type: "AUTH_FAIL"})
//       }
//     }
//   }


//   export { logIn, signUp };


import * as AuthApi from '../api/AuthRequest'
export const logIn = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    navigate("../home", { replace: true });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    navigate("../home", { replace: true });
  } catch (error) {
    console.log(error);
    dispatch({ type: "AUTH_FAIL" });
  }
};


export const logout = ()=> async(dispatch)=> {
  dispatch({type: "LOG_OUT"})
}