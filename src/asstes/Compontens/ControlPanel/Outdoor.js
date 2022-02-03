import React from 'react';
import HouseIcon from "../../Image/house.png";

const Outdoor = ({ Outdoor, LightsOutdoor }) => {
    return <div>
        <div>
            <div className='bg-white p-4 border rounded border-white shadow'>
                <img src={HouseIcon} alt='bed' className='p-2' />
                <p className='text-xl'>{Outdoor}</p>
                <p className='text-xs text-yellow-500 font-bold'> {LightsOutdoor} </p>
            </div>

        </div>
    </div>;
};

export default Outdoor;

