import React from 'react';
import './style.css'

const TodoListItem = (
  { text, 
    checked, 
    crossedOut,
    onTextOrCheckboxClicked, 
    onDeleteClicked }) => {
      
  const checkBoxClass = checked ? "checkbox checked" : "checkbox";
  const textClass = crossedOut ? "crossed-out" : "";

  return (
    <li>
      <div onClick={onTextOrCheckboxClicked} className={checkBoxClass} />
      <span onClick={onTextOrCheckboxClicked} className={textClass}>{text}</span>
      <button onClick={onDeleteClicked}>Delete</button>
    </li>
  )
}

export default TodoListItem;
