const INCREMENT = 'INCREMENT'; //constante para acciones de incremento
const DECREMENT = 'DECREMENT'; //constante para acciones de decremento

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
}; //reductor counter que aumentará o disminuirá el estado en función de la acción que reciba

const incAction = () => {
  return {
    type: INCREMENT
  };
}; //creador de acción para incrementar

const decAction = () => {
  return {
  type: DECREMENT
  };
}; //creador de acción para decrementar

const store = Redux.createStore(counterReducer); //el store de Redux aquí, pasando tus reductores