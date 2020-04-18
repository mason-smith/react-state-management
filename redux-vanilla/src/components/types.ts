import { ReactNode } from 'react';

export type TodoProps = {
  onClick: () => void;
  completed: boolean;
  text: string;
};

export type TodoListProps = {
  todos: {
    id: number;
    completed: boolean;
    text: string;
  }[];
  onTodoClick: (id: number) => void;
};

export type LinkProps = {
  active: boolean;
  children: ReactNode;
  onClick: () => void;
};
