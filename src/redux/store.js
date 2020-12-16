import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

<<<<<<< HEAD
const persistor = persistStore(store);


export default {store, persistor};
=======
export const persistor = persistStore(store);


//export default { store, persistor };
>>>>>>> 6478b274429298ab1ca2be31a98ca658e2d6af7e
