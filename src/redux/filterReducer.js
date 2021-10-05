import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './actions';

const filterReducer = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

export default filterReducer;
