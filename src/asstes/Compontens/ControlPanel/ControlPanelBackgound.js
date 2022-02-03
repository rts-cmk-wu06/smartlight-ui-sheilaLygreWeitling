import React from 'react';
import Balcony from './Balcony';
import Bathroom from './Bathroom';
import BedRoomControl from './BedRoomControl';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import Outdoor from './Outdoor';


const ControlPanelBackgound = () => {
    return <div>
        <div className='bg-gray-50 border-white rounded-t-[30px] '>
            <p className='text-blue-900 font-bold p-4 text-xl'>All Rooms</p>

            <div className='inline-grid grid-cols-2 gap-4 w-full p-4'>
                <BedRoomControl bedRooms="Bed room" LightsBedRoom="4 Lights" />
                <LivingRoom LivingRoom="Living Room" LightsLivingRoom="2 Lights" />
                <Kitchen Kitchen="Kitchen" LightsKitchen="5 Lights" />
                <Bathroom Bathroom="Bathroom" LightsBathRoom="1 Lights" />
                <Outdoor Outdoor="Outdoor" LightsOutdoor="5 Lights" />
                <Balcony Balcony="Balcony" LightsBalcony="2 Lights" />
            </div>
        </div>
    </div >;
};

export default ControlPanelBackgound;
