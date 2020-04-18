import { ADD_TODO, TOGGLE_TODO } from './actionTypes';

let nextTodoId = 0;

export function addTodo(text: string) {
  return { type: ADD_TODO, id: nextTodoId++, text };
}

export function toggleTodo(index: number) {
  return { type: TOGGLE_TODO, index };
}
