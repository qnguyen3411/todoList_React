import { ADD_TODO } from './types';

export default text => (dispatch, getState, api) => {
  api.addTodo(text)
    .then(newTodo => dispatch({
        type: ADD_TODO,
        newTodo
      }))
}