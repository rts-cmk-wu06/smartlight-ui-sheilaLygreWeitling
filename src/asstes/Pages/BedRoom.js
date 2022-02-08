import React from 'react';
import ChangeLights from '../Templates/ChangeLights';
import HeaderBedroom from '../Templates/HeaderBedroom';
import Footer from '../Compontens/Footer';
import ScenesButtons from '../Templates/ScenesButtons';


const BedRoom = () => {
    return <div>
        <HeaderBedroom />
        <ChangeLights />
        <ScenesButtons />
        <Footer />
    </div>;
};

export default BedRoom;
