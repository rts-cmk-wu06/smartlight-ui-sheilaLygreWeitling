import React from 'react';
import ChangeLights from '../Templates/ChangeLights';
import HeaderBedroom from '../Templates/HeaderBedroom';
import Footer from '../Compontens/Footer';
import Lights from '../Templates/Lights';
import { motion } from 'framer-motion';


const Details = () => {
    const fadeVariants = {
        hidden: { opacity: 0 },
        shown: {
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
        exit: {
            opacity: 0,
        },
    };

    return (
        <div>
            <motion.div
                variants={fadeVariants}
                animate="shown"
                initial="hidden"
                exit="exit"
                className="flex flex-col justify-between h-full pb-12 relative"
            >
                <HeaderBedroom />
                <Lights />
                <ChangeLights />
                <div className='bg-white'>
                    <Footer />
                </div>
            </motion.div>
        </div >
    )
}

export default Details