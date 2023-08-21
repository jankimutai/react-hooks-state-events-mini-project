import React  from "react";
import Task from "./Task";

function TaskList({tasks, handleOnClick}) {
  
  

  
  const updatedTask = tasks.map(task => (
    
      <Task key={task.text} text={task.text} category= {task.category} handleOnClick={handleOnClick} />
      
  ))
  //console.log(updatedTask);
  return (
    <div className="tasks">{updatedTask}</div>
  );
}

export default TaskList;
