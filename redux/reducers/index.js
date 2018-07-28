import {combineReducers} from 'redux';
import HelloReducer from './helloReducer';

const rootReducer = combineReducers({
    Hello: HelloReducer
})

export default rootReducer;