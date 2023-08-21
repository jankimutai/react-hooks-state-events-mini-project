import React, { useState } from "react";

function NewTaskForm({category,onTaskFormSubmit}) {

  const [getDetails , setDetails] = useState('')
  const [getCategory , setCategory] = useState('Code')

  function handleDetails(e){
    e.preventDefault()
    console.log('Details Entry')
    setDetails(e.target.value)


  }
   function handleCategoryChange(event){
    event.preventDefault();
    console.log('Selected Category')
    setCategory(event.target.value);
  };
  function handleSubmit(e){
    e.preventDefault();
    const formData = {
      text:getDetails,
      category:getCategory
    }
    console.log(formData)
    onTaskFormSubmit(formData)
    setCategory('')
    setDetails('')

  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetails} value={getDetails}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange} value={getCategory}>
          {category.map((item) =>item === "All" ? null : (<option key={item} >{item}</option>))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
