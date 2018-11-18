import React, { Component } from 'react';
import './App.css';
import TodoList from './components/todo-list';
import Footer from './components/footer';
import UserInput from './components/user-input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
          <h1>Todo List</h1>
          <UserInput />
          <TodoList />
        </div>
        <Footer />
        
      </div>
    );
  }
}

export default App;
