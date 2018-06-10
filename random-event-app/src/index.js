import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './LandingPage';
import AddPage from './AddPage';
import FindPage from './FindPage';
import ConfirmPage from './ConfirmPage';
import NotFoundPage from './NotFoundPage';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/add' component={AddPage} />
            <Route path='/find' component={FindPage} />
            <Route path='/confirm' component={ConfirmPage} />
            <Route path='/*' component={NotFoundPage} />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();