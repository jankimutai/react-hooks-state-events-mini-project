import React, { useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
function App() {
  // const [selectedCategory, setSelectedCategory] = useState('All');

  const [selectedCategory, setSelectedCategory] = useState('All');

  
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    
  };
  const [myTasks , setTasks] = useState(TASKS)
  function onTaskFormSubmit(formData){
    setTasks([...TASKS,formData]) 
    console.log(formData);
    
  }
 
  console.log(myTasks)
  //console.log(myTasks)
  const [getTask , setTask] = useState(myTasks)
  function handleOnClick(text){
    //console.log({text})
    //console.log(`${text} was clicked`)
    //console.log(`${text}`)
     setTask(TASKS.filter((i => i.text !== text )))
     
   }
  const filteredTasks = selectedCategory === 'All' ? getTask : getTask.filter((task) => task.category === selectedCategory);
  
  
   //console.log('Iam GET TASK',getTask)
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories= {CATEGORIES} tasks={filteredTasks} selectedCategory={selectedCategory} handleCategoryClick={handleCategoryClick}/>
      <NewTaskForm category={CATEGORIES} tasks={TASKS} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} handleOnClick={handleOnClick}/>
    </div>
  );
}

export default App;
