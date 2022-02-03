import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import Background from './asstes/Compontens/Background/Background';
import PageName from './asstes/Compontens/Header/PageName';
import ControlPanelBackgound from './asstes/Compontens/ControlPanel/ControlPanelBackgound';
import Footer from './asstes/Compontens/Footer/Footer';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='bg-blue-600 w-[375px]'>
        <div>
          {/* <Background /> */}
        </div>
        <div>
          <PageName controlPanel="ControlPanel" bedRoom="BedRoom" />
        </div>
        <div>
          <ControlPanelBackgound />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

