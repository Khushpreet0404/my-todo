import React, { useState } from "react";
import "./List.css";
import { CircleCheck, Circle, Trash, Edit } from "lucide-react";

const List = () => {
  const [state, setState] = useState({
    todos: [],
    task: "",
    editId: null,
    editTask: "",
  });

  console.log(state);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.task.trim() === "") return;
    setState({
      ...state,
      todos: [
        ...state.todos,
        {
          id: new Date(),
          todo: state.task,
          status: "Pending",
        },
      ],
      task: "",
    });
    console.log("Submittted");
  };

  const handleChange = (e) => {
    setState({
      ...state,
      task: e.target.value,
    });
  };

  const handleCircleClick = (id) => {
    setState({
      ...state,
      todos: state.todos.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "Complete" ? "Pending" : "Complete",
            }
          : item,
      ),
    });
  };
  const handleDelete = (id) => {
    console.log("Deleted");
    setState({
      ...state,
      todos: state.todos?.filter((item) => item.id !== id),
    });
  };

  const handleEdit = (todo) => {
    console.log(todo.id);
    setState({
      ...state,
      editId: todo.id,
      editTask: todo.todo,
    });
    console.log(state);
  };

  const handleSave = () => {
    console.log("Edit Saved");
    const updatedTodo = state.todos.map((item) =>
      item.id === state.editId ? { ...item, todo: state.editTask } : item,
    );
    if (state.editTask.trim() === "") {
      return;
    } else {
      setState({
        todos: updatedTodo,
        task: "",
        editId: null,
        editTask: "",
      });
    }
  };

  return (
    <>
      <div className="appDiv">
        <div className="app">
          <h1>To Do App</h1>
          <div className="appContainer">
            <div className="userInput">
              <form onSubmit={handleSubmit} className="inpform">
                <input
                  className="inp inpTask"
                  type="text"
                  placeholder="Enter Task Name"
                  onChange={handleChange}
                  value={state.task}
                  name="taskName"
                />
                <button className="inp addButton" type="submit">
                  Add to Task List
                </button>
              </form>
            </div>
            <ul>
              {state.todos?.map((item) => {
                return (
                  <>
                    {item.id === state.editId ? (
                      <>
                        <div className="editInp">
                          <input
                            className="inp"
                            type="text"
                            value={state.editTask}
                            onChange={(e) => {
                              setState({
                                ...state,
                                editTask: e.target.value,
                              });
                            }}
                          />
                          <button onClick={handleSave} className="inp">
                            Save
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <li className="todoTasks">
                          {/* <span>{item.status}</span> */}
                          <span className="circle">
                            {item.status === "Pending" ? (
                              <Circle
                                className="chekbox"
                                onClick={() => handleCircleClick(item.id)}
                              />
                            ) : (
                              <CircleCheck
                                className="circlecheckcolor"
                                onClick={() => handleCircleClick(item.id)}
                              />
                            )}
                          </span>
                          <span
                            className={`${"itemName"} ${item.status === "Complete" ? "complete" : ""}`}
                          >
                            {" "}
                            {item.todo}{" "}
                          </span>
                          <button className="inpUpdate">
                            {item.status === "Pending" && (
                              <Edit onClick={() => handleEdit(item)} />
                            )}
                          </button>
                          <button
                            className="inpDel"
                            onClick={() => handleDelete(item.id)}
                          >
                            <Trash />
                          </button>
                        </li>
                      </>
                    )}
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
