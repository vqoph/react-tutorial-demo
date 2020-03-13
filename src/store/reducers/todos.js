import { ADD_TODO, TOGGLE_TODO } from '../constants';

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      const { id, text } = action;
      return [...state, { id, text, completed: false }];

    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}
