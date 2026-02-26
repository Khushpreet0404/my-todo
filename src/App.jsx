
import List from "./components/List";

function App() {

  return (
    <>
      <List/>
    </>
  );
}

export default App;
















{
  /*
  
// TO DO APP - DEEPANSHU SIR
import { startTransition, useState } from "react";
import List from "./components/List";

function App() {
  const [state, setState] = useState({
    todos: [],
    task: "",
  });
  console.log(state)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("running");
    setState({
      ...state,
      todos: [
        ...state.todos,
        {
          id: `${new Date().toLocaleTimeString()}`,
          todo: state.task,
          status: "Pending",
        },
      ],
      task: "",
    });

    // console.log(e.target.value) //undefined
      console.log(state);
    console.log(state.task);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setState({
      ...state,
      task: e.target.value,
    });
  };

  return (
    <>
      <div className="app">
        <h1>To Do App</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="tasks"
            type="text"
            name="task"
            placeholder="Enter Task Name"
            value={state.task}
            onChange={handleChange}
          />
          <button type="submit">Add Task to List</button>
        </form>

        <ul>
          {state.todos?.map((item) => {
            return (
              <>
                <li>
                  <span>{item.todo}</span>
                  <span> {item.status}</span>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;

  */
}