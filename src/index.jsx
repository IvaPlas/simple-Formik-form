import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Formular from './Formular/Formular';

const App = () => {
  return (
    <div className="container">
      <Formular />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
