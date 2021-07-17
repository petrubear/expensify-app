/* eslint-disable require-jsdoc */
/* eslint-disable react/prop-types */
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const appRoot = document.getElementById('app');
ReactDOM.render(<AppRouter />, appRoot);
