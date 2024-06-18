import { useState } from "react";



const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState();
    
    const onInputChange =({target})=>{
        setinputValue( target.value);
    }

    const onSubmit1 = ( event ) =>{
        event.preventDefault();
        if (inputValue.trim().length <=1) return;

       // setCategories(categories=>[inputValue,...categories]);
       onNewCategory(inputValue.trim());
        setinputValue('');

    }

  return (
  <form onSubmit={(event)=> onSubmit1(event)}>
     <input 
    type="text"
    placeholder="Buscar gif" 
    value={inputValue}
    onChange={onInputChange}
    />
  </form>
  )
}

export default AddCategory;
