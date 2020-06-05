import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface TodoProps {
  onClick: () => void;
  completed: boolean;
  text: string;
}

const Todo: FC<TodoProps> = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
