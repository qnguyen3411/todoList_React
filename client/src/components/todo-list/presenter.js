import { selectFilteredTodos } from '../../reducers';

const mapStateToDisplayProps = (state) => {
  const todo = selectFilteredTodos(state);
  return {
    items: todo.map(({id, text, finished }) => ({ 
      id, 
      text, 
      checked: finished, 
      crossedOut: finished 
    }))
  }
}

export default mapStateToDisplayProps;