import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import { BrowserRouter, Route } from 'react-router-dom';


ReactDOM.render(
	<BrowserRouter>
        <Login />
	</BrowserRouter>,
	document.getElementById('root'));