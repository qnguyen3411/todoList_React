import receiveTodos from './receiveTodos';

export default () => (dispatch, getState, api) => {
  api.getTodos()
    .then(todos => dispatch(receiveTodos(todos)))
}