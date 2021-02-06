import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReducer from './phonebook/phonebook-reducer';

const mainReducer = combineReducers({
  contacts: phonebookReducer,
});

const store = createStore(mainReducer, composeWithDevTools());

export default store;
