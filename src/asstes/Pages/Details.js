import React from 'react';
import ChangeLights from '../Templates/ChangeLights';
import HeaderBedroom from '../Templates/HeaderBedroom';
import Footer from '../Compontens/Footer';
import Lights from '../Templates/Lights';
import { motion } from 'framer-motion';
import TurnOff from '../Compontens/TurnOff';


const Details = () => {
    const fadeVariants = {
        hden: { opacity: 0 },
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
                <div className='relative'>
                    <div className='right-[20px] top-[-15px] absolute'>
                        <TurnOff />
                    </div>
                    <ChangeLights />
                </div>
                <div className='bg-white'>
                    <Footer />
                </div>
            </motion.div>
        </div >
    )
}

export default Details