import React, {useState} from "react";  


export default function TodoForm(props){
    const [input, setInput] = useState('')
    const handleChange = e =>{
        setInput(e.target.value);
        };
    const handleSubmit = e => {
            e.preventDefault();
          
            props.onSubmit({
             id: Math.floor(Math.random() * 10000),
          text: input
          });
          setInput('');
          };    
    return (
        <form onSubmit = {handleSubmit}>
        <input
        type="text"
        placeholder='asd'
        value={input}//este es el valor que ingresa en el handleChange cuando seteamos el estado.  
        onChange = {handleChange}   
        />
        <button className='todo-button' onClick={handleSubmit}>Agregar</button>    
        </form>
    )
}