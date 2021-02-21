// responsavel em inicializar o reducer, o metodo createStore passa uma lista de reducers..

import { createStore } from 'redux';

import reducers from './reducers/import';

const store = createStore(reducers);

export default store;
