import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import routes from './routes';
import './styles/global.sass';
import './favicon.ico';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter>
        <Route path="/" component={ routes }/>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();