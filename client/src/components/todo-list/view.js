import React from 'react';
import TodoListItem from '../todo-list-item';
import './style.css'

const TodoList = ({ items, onItemClicked, onItemDelete }) =>
  <ul>
    {items.map(({ id, text, checked, crossedOut }) => (
      <TodoListItem key={id}
        text={text}
        checked={checked}
        crossedOut={crossedOut}
        onTextOrCheckboxClicked={onItemClicked(id)}
        onDeleteClicked={onItemDelete(id)} />
    ))}
  </ul>;

export default TodoList;
