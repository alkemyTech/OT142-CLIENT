const initialState = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  passwordRepeat: "",
  token: "",
  autentication: false,
}


// Use the initialState as a default value
export default function authReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    // case "auth/addName" : {
    //   return {
    //     ...state,

    //   }
    // }
    case "auth/addToken" : {
      return {
        ...state,
        
      }
    }
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
  }
}