import React from 'react';
import logo from './logo.svg';
import './App.scss';

import VisibleTodoList from '../../containers/VisibleTodoList';
import AddTodo from '../../containers/AddTodo';

export default function App() {
  return (
    <div className='app'>
      <header className='app__header'>
        <h1>React todos</h1>
        <img src={logo} className='app__header__logo' alt='logo' />
      </header>
      <VisibleTodoList className='app__todo-list' />
      <AddTodo className='app__add-todo' />
    </div>
  );
}
