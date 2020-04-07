import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'react-toastify/dist/ReactToastify.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Clock from './Clock';
// import Events from './Events';
// import Forms from './Forms'
import CustomeRoutes from './Routes';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Clock />, document.getElementById('root'));
// ReactDOM.render(<Events />, document.getElementById('root'));
ReactDOM.render(<CustomeRoutes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

