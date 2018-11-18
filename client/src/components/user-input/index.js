import UserInput from './view';
import { connect } from 'react-redux';
import mapStateToDisplayProps from './presenter';
import mapEventsToDispatch from './controller';

export default connect(mapStateToDisplayProps, mapEventsToDispatch)(UserInput);