import { combineReducers } from 'redux';

// Local Dependencies
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos,
  visibilityFilter,
});
