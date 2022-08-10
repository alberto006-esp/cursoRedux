const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
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
/*Para permitirnos combinar múltiples reductores juntos, Redux proporciona el método combineReducers().
 Este método acepta un objeto como argumento en el que se definen las propiedades que asocian las claves 
 a funciones reductoras específicas. El nombre que le des a las claves será utilizado por Redux como el 
 nombre de la pieza de estado asociada.*/
const rootReducer = Redux.combineReducers({
    count: counterReducer,
    auth: authReducer
});

const store = Redux.createStore(rootReducer);