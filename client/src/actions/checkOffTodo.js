import { CHECK_OFF_TODO } from './types';

export default id => (dispatch, getState, api) => {
  api.checkOffTodo(id);
  dispatch({
    type: CHECK_OFF_TODO,
    id
  })
}