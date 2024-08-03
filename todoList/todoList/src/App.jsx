import React, { useReducer } from 'react';

const App = () => {
  const initialValue = [
    { id: 1, name: "test" },
    { id: 2, name: "reading" }
  ];

  function reducer(state, action) {
    switch (action.type) {
      case "add":
        return [...state, { id: state.length + 1, name: action.payload }];
      case "sub":
        return state.filter((item) => item.id !== action.payload);
      case "update":
        return [...state];
      default:
        return state;
    }
  }

  const [states, dispatcher] = useReducer(reducer, initialValue);

  function handle(event) {
    if (event.key === "Enter") {
      dispatcher({ type: "add", payload: event.target.value });
    }
  }

  return (
    <>
      <h1>TODO List</h1>
      <div>
        <input onKeyDown={handle}></input>
        <button onClick={() => { dispatcher({ type: "add", payload: prompt("Enter task") }) }}>Add</button>
      </div>
      <ul>
        {states.map((task) => (
          <div key={task.id}>
            <li>{task.name}</li>
            <button onClick={() => dispatcher({ type: "sub", payload: task.id })}>Delete</button>
            <button onClick={() => dispatcher({ type: "update", payload: task.id  })}>update</button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default App;
