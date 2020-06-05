import React, { FC } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

interface AddTodoProps {
  dispatch: any;
}

const AddTodo: FC<AddTodoProps> = ({ dispatch }) => {
  let input: HTMLInputElement;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input
          ref={(node) =>
            // @ts-ignore
            (input = node)
          }
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
