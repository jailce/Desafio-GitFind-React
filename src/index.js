import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './pages/Home';

const container = document.getElementById('root');
const root = createRoot(container);
// root.render(<App />);
root.render(
    // <React.StrictMode>
        <App />
    // </React.StrictMode>
);
