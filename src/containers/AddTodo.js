import { connect } from 'react-redux';

import { addTodo } from '../store/actions';
import AddTodoForm from '../components/AddTodoForm';

const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(addTodo(value)),
});

export default connect(null, mapDispatchToProps)(AddTodoForm);
