import React from 'react';
import './style.css'

const AddButton = ({ onBtnClick, disabled }) => 
  <button onClick={onBtnClick} disabled={disabled}>Add Item</button>

export default AddButton;