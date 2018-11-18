import { CHECK_OFF_TODO, DELETE_TODO, ADD_TODO } from '../actions/types';

const initialState = [
  { id: 0, text: "Eat eggs", finished: true },
  { id: 1, text: "Play ball", finished: false },
  { id: 2, text: "Make cake", finished: false },
]

export default function (state = initialState, action) {

  switch (action.type) {

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

function addTodo(state, { text }) {
  const id = state[state.length - 1].id + 1;
  return [
    ...state,
    { id, text, finished: false }
  ];
}