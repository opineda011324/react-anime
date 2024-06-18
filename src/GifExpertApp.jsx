import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";



const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch']);

    const onAddCategories = (newCategory)=>{

        if (categories.includes(newCategory)) return;
        
       setCategories( cat =>[newCategory,...categories]);
    }
    
  return (
    <>
      <h1>GifExpertApp</h1>
      
      <AddCategory onNewCategory={event => onAddCategories(event)}
      />


        { categories.map(category =>  (
         <GifGrid key={category} category={category}/> 
        ))
        }
    
    </>
  )
}

export default GifExpertApp
