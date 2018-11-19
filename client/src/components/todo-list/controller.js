import { checkOffTodo, deleteTodo, fetchTodos } from '../../actions';

const mapEventsToDispatch = (dispatch) => ({
  onComponentMount: () => dispatch(fetchTodos()),
  onItemClicked: id => () => dispatch(checkOffTodo(id)),
  onItemDelete:  id => () => dispatch(deleteTodo(id))
})

export default mapEventsToDispatch;