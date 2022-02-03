import React from 'react';
import LivingRoomIcon from "../../Image/living.png";

const LivingRoom = ({ LivingRoom, LightsLivingRoom }) => {
    return <div>
        <div>
            <div className='bg-white p-4 border rounded-lg border-white shadow-xl'>
                <img src={LivingRoomIcon} alt='bed' className='p-2' />
                <p className='text-xl'>{LivingRoom}</p>
                <p className='text-xs text-yellow-500 font-bold'> {LightsLivingRoom} </p>
            </div>
        </div>
    </div>;
};

export default LivingRoom;
