import { createStore, combineReducers, compose } from 'redux';
import personsReducer from '../store/reducers/persons';
const rootReducer = combineReducers({
    persons:personsReducer
   
});
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    return createStore(rootReducer,composeEnhancers());
};
 export default configureStore