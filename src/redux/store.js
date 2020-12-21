import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

<<<<<<< HEAD
const persistor = persistStore(store);
/**Why is this not exporting? */


//export default {store, persistor}; // error message thinks its not exporting...?
=======




 
>>>>>>> refs/remotes/origin/master
