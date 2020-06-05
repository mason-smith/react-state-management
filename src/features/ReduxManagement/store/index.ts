import { createStore } from 'redux';

// Local Dependencies
import rootReducer from 'features/ReduxManagement/reducers';

const store = createStore(rootReducer);

export default store;
