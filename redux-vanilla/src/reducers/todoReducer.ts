import {
  ADD_TODO,
  VisibilityFilters,
  TOGGLE_TODO,
} from '../actions/actionTypes';
import { TodoState } from './todoTypes';

const initialState: TodoState = {
  todos: [],
};

function todoReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed,
            });
          }
          return todo;
        }),
      };
    default:
      return state;
  }
}

export default todoReducer;
