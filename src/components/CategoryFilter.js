import React from "react";


function CategoryFilter({ categories ,selectedCategory, handleCategoryClick}) {
  //const [handleClass , setClassName] = useState(' ');
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      
      {categories.map((category) => (
        <button key={category} onClick={() => handleCategoryClick(category)} className = {selectedCategory === category ? 'selected' : ' '}>{category}</button>
        
      ))}
      
      
        
    </div>
  );
}

export default CategoryFilter;
