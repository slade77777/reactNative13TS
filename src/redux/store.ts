import {combineReducers, createStore} from 'redux';
import answerReducer from './reducers/answerReducer';
import postReducer from './reducers/postReducer';

const stores = createStore(
  combineReducers({
    answers: answerReducer,
    posts: postReducer,
  }),
);

export default stores;
