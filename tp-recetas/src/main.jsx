import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecetasProvider } from './contexts/RecetasContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecetasProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecetasProvider>
  </React.StrictMode>
);