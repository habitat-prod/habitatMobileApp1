import {combineEpics} from 'redux-observable';
import fetchBooksEpic from './login';
const rootEpic = combineEpics(fetchBooksEpic);

export default rootEpic;
