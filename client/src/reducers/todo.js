import {
  CHECK_OFF_TODO,
  DELETE_TODO,
  ADD_TODO,
  RECEIVE_TODO
} from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {

  switch (action.type) {

    case RECEIVE_TODO:
      return action.payload;

    case CHECK_OFF_TODO:
      return checkOffTodo(state, action);

    case DELETE_TODO:
      return deleteTodo(state, action);

    case ADD_TODO:
      return addTodo(state, action);

    default:
      return state;
  }
}

function checkOffTodo(state, { id }) {
  const index = state.findIndex(item => item.id === id);
  if (index === -1) { return state; }

  return [
    ...state.slice(0, index),
    { ...state[index], finished: true },
    ...state.slice(index + 1)
  ];
}

function deleteTodo(state, { id }) {
  const index = state.findIndex(item => item.id === id);
  if (index === -1) { return state; }
  return [...state.slice(0, index), ...state.slice(index + 1)];
}

function addTodo(state, { newTodo }) {
  return [
    ...state,
    newTodo
  ];
}