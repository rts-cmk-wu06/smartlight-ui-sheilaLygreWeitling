import React from 'react';
import Arrow from '../Compontens/Arrow';
import BedRoomName from '../Compontens/BedRoomName';
import LampSVG from '../Compontens/LampSVG';

const HeaderBedroom = () => {
    return <div>
        <div className='flex'>
            <div className='flex items-center'>
                <div className='px-2.5 pt-2.5'>
                    <Arrow />
                </div>
                <BedRoomName name="Bed" room="Room" />
            </div>
            <LampSVG />
        </div>
    </div>;
};

export default HeaderBedroom;
