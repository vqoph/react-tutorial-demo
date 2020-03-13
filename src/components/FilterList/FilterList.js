import React from 'react';
import { array as pArray, string as pString, func as pFunc } from 'prop-types';

import './FilterList.scss';

const propTypes = {
  filters: pArray.isRequired,
  currentFilter: pString.isRequired,
  onClickFilter: pFunc.isRequired,
};

export default function FilterList({ filters, currentFilter, onClickFilter }) {
  const currentClass = filter =>
    (currentFilter === filter && 'filter-list__item--current') || '';

  return (
    <div className='filter-list'>
      Show:
      <ul>
        {filters.map(({ filter, label }) => (
          <li className={`filter-list__item ${currentClass(filter)}`}>
            <button
              className='button button--text'
              onClick={() => onClickFilter(filter)}
            >
              {label || filter}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

FilterList.propTypes = propTypes;
