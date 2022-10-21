import {useState} from 'react';
import './style.css';
function Input(props)
{
    const [todo, setTodo] = useState({
        content: ""
      });
    const handlechange=(event)=>
    {
        setTodo({content:event.target.value});
    }
    const handlesubmit=(event)=>
    {
        props.addtolist(todo);
        setTodo({
            content: ""
          });
        event.preventDefault();
    }
    return(
        <div>
      <form className='form'>
        <textarea
          name="content"
          onChange={handlechange}
          value={todo.content}
          placeholder="Type here..."
          rows="3"
        />
        <button onClick={handlesubmit}>Add</button>
      </form>
    </div>
    );
}

export default Input;