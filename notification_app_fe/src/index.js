
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Log } from './utils/logger';

window.addEventListener('error', (event) => {
    const errorDetails = `Uncaught script crash: ${event.message} inside file ${event.filename} at line ${event.lineno}`;
    
    
    Log("frontend", "error", "utils", errorDetails);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);