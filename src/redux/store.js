import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

/**I am trying to export persistor ... 
 *How can export this?
 * 
 * This does not seem to work...
 * I still cannot resolve 'redux-persist' from redux... */

//export const persistor = persistStore(store);

export const persistor = persistStore(rootReducer, applyMiddleware(...store));




 
