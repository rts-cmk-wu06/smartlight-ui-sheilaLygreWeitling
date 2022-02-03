import React from 'react';
import BalconyIcon from "../../Image/balcony.png";

const Balcony = ({ Balcony, LightsBalcony }) => {
    return <div>
        <div>
            <div className='bg-white p-4 border rounded border-white shadow'>
                <img src={BalconyIcon} alt='bed' className='p-2' />
                <p className='text-xl'>{Balcony}</p>
                <p className='text-xs text-yellow-500 font-bold'> {LightsBalcony} </p>
            </div>

        </div>
    </div>;

};

export default Balcony;
