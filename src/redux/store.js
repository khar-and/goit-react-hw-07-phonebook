import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filtersReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

const reducers = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: reducers,
});
