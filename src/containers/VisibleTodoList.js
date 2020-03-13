import { toggleTodo } from '../store/actions';
import { VisibilityFilters } from '../store/actions';
import { connect } from 'react-redux';

import TodoList from '../components/TodoList';

function getVisibleTodo(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(({ completed: c }) => c);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(({ completed: c }) => !c);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

const mapStateToProps = ({ todos, visibilityFilter }) => ({
  todos: getVisibleTodo(todos, visibilityFilter),
});

const mapDispatchProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchProps)(TodoList);
