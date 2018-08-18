import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import ducks from './ducks'

const store = createStore(combineReducers({
  ...ducks,
  form: formReducer,
}))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'))
registerServiceWorker()
