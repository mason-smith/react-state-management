import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { TodoListProps } from './types';

const TodoList: FC<TodoListProps> = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
