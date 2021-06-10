import { combineReducers } from 'redux';
import memberReducer from './memberReducer';
import navReducer from './navReducer';

const rootReducer = combineReducers({
  nav: navReducer,
  member: memberReducer,
});

export default rootReducer;
