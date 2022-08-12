const immutableReducer = (state = [0,1,2,3,4,5], action) => {
    switch(action.type) {
      case 'REMOVE_ITEM':
        // Usamos el operador de propagacion combinado con .slice() para eliminar un elemento del arreglo
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index+1, state.length)
          ];
          //otra forma de hacerlo seria:
          // state.slice(0, action.index).concat(state.slice(action.index+1, state.length));
      default:
        return state;
    }
  };
  
  const removeItem = (index) => {
    return {
      type: 'REMOVE_ITEM',
      index
    }
  }
  
  const store = Redux.createStore(immutableReducer);