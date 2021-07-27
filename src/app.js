import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import './firebase/firebase';
const store = configureStore();
/*
const state = store.getState();
store.dispatch(addExpense({description: 'Water Bill', amount: 40.0}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 70.0, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 800.0}));
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
*/
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

const appRoot = document.getElementById('app');
ReactDOM.render(<p>Loading...</p>, appRoot);
store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, appRoot);
});
