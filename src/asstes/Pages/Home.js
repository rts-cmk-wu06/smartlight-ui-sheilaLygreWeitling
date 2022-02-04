import React from 'react';
import Button from '../Compontens/Button';

import PageName from '../Templates/Header';
import RoomCategory from "../Templates/RoomCategory";

const Home = () => {
    return <div>
        <div>
            <PageName />
            <RoomCategory />
            <div>
                <Button />
            </div>
        </div>
    </div>;
};

export default Home;
