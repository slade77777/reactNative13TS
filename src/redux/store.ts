import {combineReducers, createStore} from 'redux';
import answerReducer from './reducers/answerReducer';

const stores = createStore(
  combineReducers({
    answers: answerReducer,
  }),
);

export default stores;
