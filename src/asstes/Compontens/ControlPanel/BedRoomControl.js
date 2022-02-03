import React from 'react';
import BedRoomIcon from "../../Image/bed.png";

const BedRoomControl = ({ bedRooms, LightsBedRoom }) => {
    return <div>
        <div>
            <div className='bg-white p-4 border rounded-lg border-white shadow-xl'>
                <img src={BedRoomIcon} alt='bed' className='p-2' />
                <p className='text-xl'>{bedRooms}</p>
                <p className='text-xs text-yellow-500 font-bold'> {LightsBedRoom} </p>
            </div>

        </div>
    </div>;
};

export default BedRoomControl;
