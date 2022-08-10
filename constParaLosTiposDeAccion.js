const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
/*Una práctica común cuando se trabaja con Redux es asignar tipos de acción como constantes
 de sólo lectura, y luego hacer referencia a estas constantes dondequiera que se utilicen. */
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN: 
      return {
        authenticated: true
      }
    case LOGOUT: 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};