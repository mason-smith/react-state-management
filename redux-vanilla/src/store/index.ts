import { createStore } from 'redux';

// Local Dependencies
import reducer from '../reducers/rootReducer';

const store = createStore(reducer);

export default store;
