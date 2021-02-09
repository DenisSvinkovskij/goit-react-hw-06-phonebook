// import { v4 as uuidv4 } from 'uuid';
// import types from './phonebook-types';

// export const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: { id: uuidv4(), name, number },
// });

// export const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// export const changeFilter = filterValue => ({
//   type: types.CHANGE_FILTER,
//   payload: filterValue,
// });

import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('phonebook/add', (name, number) => ({
  payload: { id: uuidv4(), name, number },
}));
export const deleteContact = createAction('phonebook/delete');
export const changeFilter = createAction('phonebook/changeFilter');
