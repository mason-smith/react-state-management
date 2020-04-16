import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actionTypes';

export function addTodo(text: string) {
  return { type: ADD_TODO, text };
}

export function toggleTodo(index: number) {
  return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter: string) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
