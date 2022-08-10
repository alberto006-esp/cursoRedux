const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Variable global count:
let count = 0;

//store.subscribe() nos permite suscribir funciones de escucha al almacén, 
//que se llaman cada vez que se envía una acción contra el almacén.
function AddOne() {
  count+=1;
}
store.subscribe(AddOne);

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);