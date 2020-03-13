import React, { useState } from 'react';
import { func as pFunc } from 'prop-types';
import './AddTodoForm.scss';

const propTypes = { onSubmit: pFunc.isRequired };

export default function AddTodoForm({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const { isInputValid } = {
    get isInputValid() {
      return !!inputValue.trim();
    },
  };

  const _onSubmit = e => {
    e.preventDefault();
    if (!isInputValid) return;
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <div className='add-todo-form'>
      <form onSubmit={_onSubmit}>
        <div className='form__group'>
          <input
            typoe='text'
            className='form__input--text'
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button
            type='submit'
            className='button button--primary'
            disabled={!isInputValid}
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}

AddTodoForm.propTypes = propTypes;
