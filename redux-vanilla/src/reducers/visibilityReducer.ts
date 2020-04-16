import {
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from '../actions/actionTypes';
import { VisibilityState } from './todoTypes';

const initialState: VisibilityState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
};

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action: any) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;
