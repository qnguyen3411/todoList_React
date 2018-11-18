import React from 'react';
import './style.css'

const NewTodoField = ({ onInputChanged, text }) => 
  <input 
    onChange={onInputChanged} 
    value={text} 
  />;

export default NewTodoField;

