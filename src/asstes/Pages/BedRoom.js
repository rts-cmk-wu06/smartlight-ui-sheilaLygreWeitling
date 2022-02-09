import React from 'react';
import ChangeLights from '../Templates/ChangeLights';
import HeaderBedroom from '../Templates/HeaderBedroom';
import Footer from '../Compontens/Footer';
import Lights from '../Templates/Lights';



const BedRoom = () => {
    return <div>
        <HeaderBedroom />
        <Lights />
        <ChangeLights />

        <Footer />
    </div>;
};

export default BedRoom;
