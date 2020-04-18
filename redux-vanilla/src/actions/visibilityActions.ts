import { SET_VISIBILITY_FILTER } from './actionTypes';

export function setVisibilityFilter(filter: string) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
