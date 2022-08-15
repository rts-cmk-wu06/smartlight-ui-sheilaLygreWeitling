import React from 'react';
import ChangeLights from '../Templates/ChangeLights';
import HeaderBedroom from '../Templates/HeaderBedroom';
import Footer from '../Compontens/Footer';
import Lights from '../Templates/Lights';

const Details = () => {
    return (
        <div >
            <HeaderBedroom />
            <Lights />
            <ChangeLights />
            <div className='bg-white'>
                <Footer />
            </div>

        </div>
    )
}

export default Details