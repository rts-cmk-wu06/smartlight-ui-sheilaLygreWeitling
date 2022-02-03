import React from 'react';
import BathroomIcon from "../../Image/bathtube.png";

const Bathroom = ({ Bathroom, LightsBathRoom }) => {
    return <div>
        <div>
            <div className='bg-white p-4 border rounded border-white shadow'>
                <img src={BathroomIcon} alt='bed' className='p-2' />
                <p className='text-xl'>{Bathroom}</p>
                <p className='text-xs text-yellow-500 font-bold'> {LightsBathRoom} </p>
            </div>

        </div>
    </div>;
};

export default Bathroom;
