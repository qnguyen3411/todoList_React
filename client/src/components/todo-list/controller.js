import { checkOffTodo, deleteTodo } from '../../actions';

const mapEventsToDispatch = (dispatch) => ({
  onItemClicked: id => () => dispatch(checkOffTodo(id)),
  onItemDelete:  id => () => dispatch(deleteTodo(id))
})

export default mapEventsToDispatch;