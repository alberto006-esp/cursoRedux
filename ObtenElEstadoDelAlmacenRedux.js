const store = Redux.createStore(
    (state = 5) => state
  );
  
  // para recuperar el estado actual del objeto almacén Redux usamos el metodo .getState()
  const currentState = store.getState();