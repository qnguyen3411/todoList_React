import { combineReducers } from 'redux';
import TodoReducers from './todo';
import InputReducers from './input';
import FilterModeReducers from './filter';
import { FILTERMODE } from '../actions/types';

export default combineReducers({
  todo: TodoReducers,
  input: InputReducers,
  filter: FilterModeReducers
})

export const selectFilteredTodos = (state) => {
  switch (state.filter.filterMode) {
    case FILTERMODE.SHOW_ACTIVE:
      return state.todo.filter(item => item.finished === false);
    case FILTERMODE.SHOW_FINISHED:
      return state.todo.filter(item => item.finished === true);
    default:
      return state.todo;
  }
}