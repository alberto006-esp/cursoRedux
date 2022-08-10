const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // Usamos el switch para responder a diferentes eventos de acción.
    switch(action.type){
      case 'LOGIN': 
      return {authenticated: true};
  
      case 'LOGOUT': 
      return {authenticated: false};
  
      default: 
      return defaultState;
    }
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  const logoutUser = () => {
    return {
      type: 'LOGOUT'
    }
  };