import React from 'react';
import BedRoomChanges from '../Compontens/BedRoomChanges';
import SlideBar from '../Compontens/SlideBar';


const ChangeLights = () => {
    return <div>
        <div className='bg-gray-50 '>
            <BedRoomChanges />
            <div className='p-4'>
                <SlideBar />
            </div>
        </div>
    </div>;
};

export default ChangeLights;
