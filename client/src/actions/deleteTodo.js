import { DELETE_TODO } from './types';

export default id => (dispatch, getState, api) => {
  api.deleteTodo(id);
  dispatch({
    type: DELETE_TODO,
    id
  })
}