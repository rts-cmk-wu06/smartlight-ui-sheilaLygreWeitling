import React from 'react';
import BedRoomChanges from '../Compontens/BedRoomChanges';
import ColorButtons from '../Compontens/ColorButtons';
import SlideBar from '../Compontens/SlideBar';
import ScenesButtons from '../Templates/ScenesButtons';


const ChangeLights = () => {
    return <div>
        <div className='bg-gray-50 rounded-t-[30px] p-4'>
            <BedRoomChanges />
            <div>
                <SlideBar />
            </div>
            <ColorButtons />
            <ScenesButtons />
        </div>
    </div>;
};

export default ChangeLights;
