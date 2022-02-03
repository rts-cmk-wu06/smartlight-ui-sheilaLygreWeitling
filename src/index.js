import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Background from './asstes/Compontens/Background/Background';
import PageName from './asstes/Compontens/Header/PageName';
import ControlPanelBackgound from './asstes/Compontens/ControlPanel/ControlPanelBackgound';



ReactDOM.render(
  <React.StrictMode>
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
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

