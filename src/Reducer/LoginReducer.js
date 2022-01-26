   
import {
    LOGIN_WITH_PHONE,
    LOGIN_WITH_MAIL,
    OTP_CODE_ENTERED
  } from "./ActionTypes";
  
  export const initialState = {
    loading: null,
    email: null,
    phone: null,
    otpcode: null,
    errorMessage: null,
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOGIN_WITH_PHONE:
        return Object.assign({}, state, {
            phone:action.payload
        });
  
      case LOGIN_WITH_MAIL:
        return Object.assign({}, state, {
            mail:action.payload
        });
  
      case OTP_CODE_ENTERED:
        return Object.assign({}, state, {
            otpcode:action.payload
        });
      
      default:
        return state;
    }
  }