import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import { Provider } from "react-redux";
import {BrowserRouter, Route} from 'react-router-dom';
import color from './components/color'

import colorReducer from "./reducers/colorReducer";

var store = createStore(colorReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();