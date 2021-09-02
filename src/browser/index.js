import React from 'react';
import { hydrate } from 'react-dom'
import App from '../shared/App';
import { BrowserRouter } from 'react-router-dom'
// test


hydrate(
    <BrowserRouter>
        <App coreCartId={window.__INITIAL_DATA__} />
    </BrowserRouter>,
    document.getElementById('app')
)