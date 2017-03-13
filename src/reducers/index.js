import {combineReducers} from 'redux';
import playerReducer from './playerReducer'

const reducers = {
  playerState: playerReducer
};

module.exports = combineReducers(reducers);
