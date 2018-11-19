import { changeFilterMode } from '../../actions';

const mapEventsToDispatch = (dispatch, ownProps) => ({
  onClick: () => dispatch(changeFilterMode(ownProps.filterMode))
})

export default mapEventsToDispatch;