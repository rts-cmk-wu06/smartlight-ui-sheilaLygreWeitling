import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Background from './asstes/Compontens/Background/Background';


ReactDOM.render(
  <React.StrictMode>
    <div className='bg-blue-600'>
      <Background />
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

