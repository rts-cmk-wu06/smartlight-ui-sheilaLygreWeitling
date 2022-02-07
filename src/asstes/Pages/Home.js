import React from 'react';
import Button from '../Compontens/Button';
import Footer from '../Compontens/Footer';
import PageName from '../Templates/Header';
import RoomCategory from "../Templates/RoomCategory";


const Home = () => {
    return <div>
        <div>


            <PageName />
            <RoomCategory />
            <Button />
            <Footer />

        </div>
    </div>;
};

export default Home;
