// import { combineReducers } from 'redux';
// import types from './phonebook-types';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [payload, ...state];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './phonebook-actions';

const items = createReducer([], {
  [addContact]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
