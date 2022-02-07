import React from 'react';

const RoomName = ({ title, Lights }) => {
    return <div>
        <p className='text-xl'>{title}</p>
        <p className='text-xs text-yellow-500 font-bold'> {Lights} </p>
    </div>;
};

export default RoomName;
