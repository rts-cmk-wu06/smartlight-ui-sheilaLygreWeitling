import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Home from "./asstes/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='bg-blue-600 w-[375px]'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

