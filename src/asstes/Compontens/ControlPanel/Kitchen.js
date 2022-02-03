import React from 'react';
import KitchenIcon from "../../Image/kitchen.png";


const Kitchen = ({ Kitchen, LightsKitchen }) => {
    return <div>
        <div>
            <div className='bg-white p-4 border rounded-lg border-white shadow-xl'>
                <img src={KitchenIcon} alt='bed' className='p-2' />
                <p className='text-xl'>{Kitchen}</p>
                <p className='text-xs text-yellow-500 font-bold'> {LightsKitchen} </p>
            </div>

        </div>
    </div>;
};

export default Kitchen;
