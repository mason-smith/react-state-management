import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

// Local Dependencies
import TodoList from '../components/TodoList';
import { VisibilityFilters } from '../actions';

// @ts-ignore
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      // @ts-ignore
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      // @ts-ignore
      return todos.filter((t) => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

// @ts-ignore
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

// @ts-ignore
const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
