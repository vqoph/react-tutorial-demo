import React from 'react';
import { func as pFunc, array as pArray } from 'prop-types';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const propTypes = {
  toggleTodo: pFunc.isRequired,
  todos: pArray.isRequired,
};

export default function TodoList({ toggleTodo, todos = [] }) {
  return (
    <ul className='todo-list'>
      {todos.map(({ text: todoText, id, completed }) => (
        <TodoListItem
          todoText={todoText}
          todoId={id}
          key={id}
          completed={completed}
          onChange={e => toggleTodo(id)}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = propTypes;
