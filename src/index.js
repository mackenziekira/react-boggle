import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const LETTERS = [
['b', 'a', 'r', 'd', 's'],
['l', 'e', 't', 'h', 'i'],
['o', 'k', 'h', 'a', 'u'],
['w', 'a', 'y', 's', 'g'],
['n', 'i', 'p', 'o', 'n'],
]

ReactDOM.render(
  <App letters={LETTERS} />,
  document.getElementById('root')
);
