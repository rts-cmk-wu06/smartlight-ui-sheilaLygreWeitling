import React from 'react';
import Button from '../Compontens/Button';
import Footer from '../Compontens/Footer';
import PageName from '../Templates/Header';
import RoomCategory from "../Templates/RoomCategory";


const Home = () => {
    return <div>
        <div>
            <PageName />
            <div className='bg-gray-100 rounded-md h-fit '>
                <RoomCategory />
                <Button />
                <div className='bg-white'>
                    <Footer />
                </div>

            </div>
        </div>
    </div>;
};

export default Home;
