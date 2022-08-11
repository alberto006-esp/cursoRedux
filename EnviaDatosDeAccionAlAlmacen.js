const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    case ADD_NOTE: 
    //En el caso de que el tipo de acción sea de tipo ADD_NOTe devolveremos el texto asociado.
      return action.text;
    default:
      return state;
  }
};

const addNoteText = (note) => {
  /*También puedes enviar datos específicos junto con sus acciones. De hecho, 
  esto es muy común porque las acciones suelen originarse a partir de alguna 
  interacción del usuario y suelen llevar consigo algunos datos. 
  El almacén Redux a menudo necesita conocer estos datos. */
  return{
    type: ADD_NOTE,
    text: note
  }
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());