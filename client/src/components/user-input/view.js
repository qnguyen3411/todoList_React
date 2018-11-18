import React from 'react';
import AddButton from '../add-button';
import NewTodoField from '../new-todo-field';

const UserInput = ({ text, onInputChanged, onSubmit }) => 
  <React.Fragment>
    <NewTodoField text={text} onInputChanged={onInputChanged} />
    <AddButton onBtnClick={onSubmit(text)} disabled={!text.trim()} />
  </React.Fragment>


export default UserInput;