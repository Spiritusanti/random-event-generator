import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './LandingPage';
import InputPage from './InputPage';
import FindPage from './FindPage';
import NotFoundPage from './NotFoundPage';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/input' component={InputPage} />
            <Route path='/find' component={FindPage} />
            <Route path='/*' component={NotFoundPage} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
