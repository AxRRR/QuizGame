import React from 'react';
import ReactDOM from 'react-dom';
import { QuizGame } from './QuizGame';
import './styles/styles.scss'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizGame />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

