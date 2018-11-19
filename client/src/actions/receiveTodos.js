import { RECEIVE_TODO } from './types';

export default (todos) => ({
  type: RECEIVE_TODO,
  payload: todos
})