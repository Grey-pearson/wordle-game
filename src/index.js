import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// WORDLE
// grid of square cells 5W*6H
// guesses must be a word in the word list and 5 letters long
// once full word is entered and enter button is hit render letters in the work and in the right place green and letters that are right but in the wrong place as yellow
// statistics are shown in the pop up you get when finishing the wordle