import { v1 as uuid } from 'uuid';
import { ADD_TODO, TOGGLE_TODO } from '../constants';

export const addTodo = text => ({
  type: ADD_TODO,
  id: uuid(),
  text,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});
