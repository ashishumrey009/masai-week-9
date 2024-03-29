import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import{
    createStore,
    combineReducers
  }from "redux"
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import foodReducer from './foodstore';
const rootReducer = combineReducers({
    foodapp:foodReducer
});
const store =createStore(rootReducer,
     /* preloadedState, */
+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
console.log(store.getState())
const rootElement= document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
