const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  //Llamar a store.dispatch() y pasar el valor devuelto por un creador de acción envía 
  //una acción de regreso al almacén.
  store.dispatch(loginAction());