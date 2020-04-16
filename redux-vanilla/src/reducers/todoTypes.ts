export interface TodoState {
  todos: {
    text: string;
    completed: boolean;
  }[];
}

export interface VisibilityState {
  visibilityFilter: string;
}
