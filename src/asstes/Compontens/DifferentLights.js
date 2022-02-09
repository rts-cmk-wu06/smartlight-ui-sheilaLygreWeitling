import React from 'react';
import bulbMain from "../Image/bulbMain.png"
import deskMain from "../Image/deskMain.png"
import bedMain from "../Image/bedMain.png"


const DifferentLights = ({ main, desk, bed }) => {
    return <div>
        <div className='flex'>
            <button className='flex bg-white p-3 rounded-xl text-xs font-bold m-2 text-blue-900'> <img src={bulbMain} alt="" />{main}</button>
            <button className='flex bg-blue-900 p-3 rounded-xl text-xs font-bold m-2 text-white'><img src={deskMain} alt="" />{desk}</button>
            <button className='flex bg-white p-3 rounded-xl text-xs font-bold m-2 text-blue-900'> <img src={bedMain} alt="" />{bed}</button>
        </div>
    </div>;
};

export default DifferentLights;
