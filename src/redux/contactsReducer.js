import { createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  deleteContactSuccess,
  fetchContactsSuccess,
} from './actions';

const contactsReducer = createReducer([], {
  [addContactSuccess]: (state, { payload }) => [
    ...state,
    {
      ...payload,
    },
  ],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [fetchContactsSuccess]: (_, { payload }) => payload,
});

export default contactsReducer;
