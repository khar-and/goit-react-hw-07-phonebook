import React from 'react';
// import PropTypes from 'prop-types';
import { Div, Input, Label } from './Filter.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  // Обработчик изменения значения фильтра
  const onChangeFilter = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <Div>
      <Label>
        Find contacts by Name
        <Input type="text" value={value} onChange={onChangeFilter} />
      </Label>
    </Div>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChangeFilter: PropTypes.func.isRequired,
// };

export default Filter;
