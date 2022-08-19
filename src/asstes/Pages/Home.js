import { motion } from 'framer-motion';
import React from 'react';
import Button from '../Compontens/Button';
import Footer from '../Compontens/Footer';
import PageName from '../Templates/Header';
import RoomCategory from "../Templates/RoomCategory";


const Home = () => {
    return <div>
        <div>
            <PageName />
            <motion.div className='bg-gray-100 rounded-md h-fit ' initial={{ x: "100vw" }} animate={{ x: 0 }} transition={{ duration: 1, ease: "easeIn" }}>
                <RoomCategory />
                <Button />
                <div className='bg-white'>
                    <Footer />
                </div>
            </motion.div>
        </div>
    </div>;
};

export default Home;
