import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todoActions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos: any, filter: any) => {
  console.log('todos FROM REDUC :', todos);
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter((t: any) => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter((t: any) => !t.completed);
  }
};

const mapStateToProps = (state: any) => {
  return {
    todos: getVisibleTodos(state.todos.todoList, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id));
    },
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
