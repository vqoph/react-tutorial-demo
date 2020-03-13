import React from 'react';
import { string as pString, bool as pBoolean, func as pFunc } from 'prop-types';

const propTypes = {
  todoId: pString.isRequired,
  todoText: pString.isRequired,
  completed: pBoolean.isRequired,
  onChange: pFunc.isRequired,
};

export default function TodoListItem({ todoId, todoText, completed, onChange }) {
  const elementName = `${todoId}Checkbox`;
  return (
    <li className={(completed && 'completed') || ''}>
      <input
        type='checkbox'
        id={elementName}
        name={elementName}
        checked={completed}
        onChange={onChange}
      />
      <label htmlFor={elementName}>{todoText}</label>
    </li>
  );
}

TodoListItem.propTypes = propTypes;
