import { combineReducers } from 'redux';

// Local Dependencies
import visibilityFilter from './visibilityReducer';
import todos from './todoReducer';

const reducer = combineReducers({
  visibilityFilter,
  todos,
});

export default reducer;
