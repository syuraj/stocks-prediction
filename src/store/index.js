import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from '../reducers';
import getProvisionSagas from '../ducks/getProvision.sagas.js';
import saveProvisionSagas from '../ducks/saveProvision.sagas.js';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(getProvisionSagas);
sagaMiddleware.run(saveProvisionSagas);

export default store;
