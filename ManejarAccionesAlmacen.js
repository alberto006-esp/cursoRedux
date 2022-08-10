const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    /*Los reductores en Redux son responsables de las modificaciones 
    de estado que tienen lugar en respuesta a las acciones.
    Un reducer toma state y action como argumentos, y siempre devuelve un nuevo state.*/
    if(action.type === 'LOGIN'){
      return{
        login: true
      };
    }else{
      return state;
    }
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };