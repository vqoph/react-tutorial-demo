import React, { useState } from 'react';
import { func as pFunc } from 'prop-types';

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
        {isInputValid}
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <button type='submit' disabled={!isInputValid}>
          Add Todo
        </button>
      </form>
    </div>
  );
}

AddTodoForm.propTypes = propTypes;
