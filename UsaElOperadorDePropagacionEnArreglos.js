const immutableReducer = (state = ['Do not mutate state!'], action) => {
    switch(action.type) {
      case 'ADD_TO_DO':
        // Creamos un nuevo array que copie el state usando el operador de propagación (...) 
        //y añadiendole una nueva tarea.
        let array = [...state, action.todo];
        return array;
      default:
        return state;
    }
  };
  
  const addToDo = (todo) => {
    return {
      type: 'ADD_TO_DO',
      todo
    }
  }
  
  const store = Redux.createStore(immutableReducer);