export interface TodoState {
  todoList: {
    text: string;
    completed: boolean;
  }[];
}

export interface VisibilityState {
  visibilityFilter: string;
}
