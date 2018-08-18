import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import ducks from './ducks'

const store = createStore(combineReducers({
    ...ducks,
}))

ReactDOM.render(

<Provider store = {store}>
    <App />
</Provider>    

, document.getElementById('root'));
registerServiceWorker();
