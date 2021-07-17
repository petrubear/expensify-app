/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is my dashboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is my add component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is my edit component
    </div>
);

const HelpPage = () => (
    <div>
        This is my help component
    </div>
);

const NotFoundPage = () => (
    <div>
        404!
    </div>
);

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);

const appRoot = document.getElementById('app');
ReactDOM.render(routes, appRoot);
