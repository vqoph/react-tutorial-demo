import React from 'react';
import logo from './logo.svg';
import './App.scss';

import VisibleTodoList from '../../containers/VisibleTodoList';
import AddTodo from '../../containers/AddTodo';

export default function App() {
  return (
    <div className='app'>
      <header className='app__header'>
        <img src={logo} className='app__header__logo' alt='logo' />
        <h1>React todos tutorial</h1>
      </header>
      <div className='app__body'>
        <VisibleTodoList />
        <AddTodo />
      </div>
    </div>
  );
}
