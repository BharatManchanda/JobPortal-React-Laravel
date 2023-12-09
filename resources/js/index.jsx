import React from 'react';
import ReactDOM from 'react-dom/client';
import Apps from './Apps.jsx';
import { BrowserRouter } from 'react-router-dom';
import '../css/app.scss';
import { Provider } from 'react-redux';
import store from './Store/index.jsx';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
        <Provider store={store}>
            <BrowserRouter>
                <Apps />
            </BrowserRouter>
        </Provider>
    );