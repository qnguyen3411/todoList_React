import { combineReducers } from 'redux';
import TodoReducers from './todo';
import InputReducers from './input';

export default combineReducers({
  todo: TodoReducers ,
  input: InputReducers
})