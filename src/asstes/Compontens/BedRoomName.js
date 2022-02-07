import React from 'react';
import H1 from './H1';


const BedRoomName = ({ name, room }) => {
    return <div>
        <h1 className='text-white font-bold text-3xl p-4'> {name}<span className='font-normal'>{room}</span></h1>
    </div>;
};

export default BedRoomName;
