import React, { useState } from "react";
import "./List.css";
import {CircleCheck,Circle,Trash} from 'lucide-react'

const List = () => {
  const [state, setState] = useState({
    todos: [],
    task: "",
  });

  console.log(state);
  const handleSubmit = (e) => {
    e.preventDefault();
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

  const handleClick=(id)=>{
    setState({
      ...state, todos:state.todos.map((item)=>(item.id===id)?{...item,status:"Complete",}:item)
    })
  }
 const handleClickDelete=(id)=>{
  setState({
    ...state,todos:state.todos.filter((item)=>item.id!==id)
  })
 }

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
                  required
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
                    <li className="todoTasks">
                      {/* <span>{item.status}</span> */}
                      <span className="circle">{(item.status==="Pending")?<Circle onClick={()=>handleClick(item.id)}/> : <CircleCheck onClick={()=>handleClick(item.id)}/>}</span>
                      <span className={`${"itemName"} ${item.status==="Complete"?"complete":""}`}> {item.todo} </span>
                      <button className="inp inpDel" onClick={()=>handleClickDelete(item.id)}><Trash/></button>
                      <button className="inp inpUpdate" >Update</button>
                    </li>
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
