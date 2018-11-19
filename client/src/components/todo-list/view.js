import React, { Component } from 'react';
import TodoListItem from '../todo-list-item';
import './style.css'

export default class TodoList extends Component {
  componentDidMount() {
    this.props.onComponentMount();
  }

  render() {
    const { items, onItemClicked, onItemDelete } = this.props;
    return (
      <ul>
        {items.map(({ id, text, checked, crossedOut }) => (
          <TodoListItem
            key={id}
            text={text}
            checked={checked}
            crossedOut={crossedOut}
            onTextOrCheckboxClicked={onItemClicked(id)}
            onDeleteClicked={onItemDelete(id)} />
        ))}
      </ul>
    )

  }
}
