const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, complete: !todo.complete};
        }
        return todo;
      });

    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);

    default:
      return todos;
  }
}

function newTodo(name) {
  return {id: Date.now(), name: name, complete: false};
}

const UseReducerExample = () => {
  const [todos, dispatch] = React.useReducer(reducer, []);
  const [name, setName] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO, payload: { name: name }});
    setName('');
  }

  return (
    <>
        <h1> Use Reducer Example </h1>
        <br />
        <form onSubmit={e => handleSubmit(e)}>
          <input type="text" value={name} onChange={e => setName(e.target.value)}/>
          <button type="submit">Add Todo</button>
        </form>
        <br />
        {todos.map(todo => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
        })}
    </>
  );
}

const Todo = ({todo, dispatch}) => {
  console.log(todo);
  return (
    <div style={{ backgroundColor: todo.complete ? '#399c25' : '#b51414'}}>
      <span>
        {todo.name}
      </span>
      <button onClick={ () => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}}) }>Toggle</button>
      <button onClick={ () => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}}) }>Delete</button>
    </div>
  );
}


// const ACTIONS = {
//   INCREMENT: 'increment',
//   DECREMENT: 'decrement'
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.INCREMENT:
//       return {count: state.count + 1};
//     case ACTIONS.DECREMENT:
//       return {count: state.count - 1};
//     default:
//       return state;
//   }
// }

// const UseReducerExample = () => {
//   const [state, dispatch] = React.useReducer(reducer, {count: 0});

//   function handleIncrement() {
//     dispatch({type: ACTIONS.INCREMENT});
//   }

//   function handleDecrement() {
//     dispatch({type: ACTIONS.DECREMENT});
//   }


//   return (
//     <>
//         <h1> Use Reducer Example </h1>
//         <br />
//         <button onClick={handleDecrement}>-</button>
//         <span> Count: {state.count} </span>
//         <button onClick={handleIncrement}>+</button>
//     </>
//   );
// }