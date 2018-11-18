import { addTodo, changeTextInput } from '../../actions';

const mapEventsToDispatch = dispatch => ({
  onSubmit: currInput => () => {
    if(!currInput.trim()) { return; }
    dispatch(addTodo(currInput));
    dispatch(changeTextInput(""));
  },

  onInputChanged: e => dispatch(changeTextInput(e.target.value))
})

export default mapEventsToDispatch;