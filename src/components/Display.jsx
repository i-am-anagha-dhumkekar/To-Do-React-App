import React from "react";
import './style.css';
function Display(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div  className='todo'>
      <h3>{props.content}</h3>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Display;