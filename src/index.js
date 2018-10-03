import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import { Provider } from "react-redux";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Color from './components/color';
import Analogic from './components/analogic';
import Triadic from './components/triadic';
import Tetratic from './components/tetratic';
import Complementary from './components/complementary';
import Favorites from './components/favorites';

import colorReducer from "./reducers/colorReducer";

var store = createStore(colorReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
    <div>
    <Switch>
        <Route exact path="/" component={Color} />
        <Route exact path="/analogic" component={Analogic} />
        <Route exact path="/triadic" component={Triadic} />
        <Route exact path="/tetratic" component={Tetratic} />
        <Route exact path="/complementary" component={Complementary} />
        <Route exact path="/favorites" component={Favorites} />
    </Switch>
    </div>
</BrowserRouter>
    </Provider>, 
    
    document.getElementById('root'));
registerServiceWorker();