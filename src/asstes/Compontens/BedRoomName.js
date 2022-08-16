import React from 'react';

const BedRoomName = ({ name, room, lights }) => {
    return <div>
        <h1 className='text-white font-bold text-3xl p-4'> {name}<span className='font-normal'>{room}</span></h1>
        <h2 className='text-lg text-yellow-500 font-bold'>{lights}</h2>
    </div >;
};

export default BedRoomName;
