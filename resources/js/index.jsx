import React from 'react';
import ReactDOM from 'react-dom/client';
import Apps from './Apps.jsx';
import { BrowserRouter } from 'react-router-dom';
import '../css/app.scss'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
        <BrowserRouter>
            <Apps />
        </BrowserRouter>
        );