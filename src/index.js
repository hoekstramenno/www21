import './assets/scss/fonts.scss';
import './assets/scss/bootstrap.scss';
import React from 'react';
import { render } from 'react-dom';
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom';

render(<Router><App/></Router>, document.getElementById('root'))
