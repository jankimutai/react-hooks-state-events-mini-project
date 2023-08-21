import React from "react";

function Task({text , category ,handleOnClick}) {
  //const [getTask , setTask] = useState(text)
  
  function handleClick(){
    //console.log({text})
    //console.log(`${text} was clicked`)
    handleOnClick(text)
   
    
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
