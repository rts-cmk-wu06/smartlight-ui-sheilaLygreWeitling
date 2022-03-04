import React from 'react';
import bulbMain from "../Image/bulbMain.png"
import deskMain from "../Image/deskMain.png"
import bedMain from "../Image/bedMain.png"
import { motion } from "framer-motion"
import { useRef } from 'react';


const DifferentLights = ({ main, desk, bed }) => {

    const constraintsRef = useRef(null)

    return <div>
        <motion.div ref={constraintsRef} className='overflow-hidden'>
            <motion.div drag="x" dragConstraints={{ left: -180, right: 0, top: 0, bottom: 0 }} className='flex '>
                <button className='flex bg-white p-3 rounded-xl text-xs font-bold m-2 text-blue-900 min-w-[124px]'> <img src={bulbMain} alt="" />{main}</button>
                <button className='flex bg-blue-900 p-3 rounded-xl text-xs font-bold m-2 text-white  min-w-[124px]'><img src={deskMain} alt="" />{desk}</button>
                <button className='flex bg-white p-3 rounded-xl text-xs font-bold m-2 text-blue-900  min-w-[124px]'> <img src={bedMain} alt="" />{bed}</button>
                <button className='flex bg-white p-3 rounded-xl text-xs font-bold m-2 text-blue-900  min-w-[124px]'> <img src={bedMain} alt="" />{bed}</button>
            </motion.div>
        </motion.div>
    </div >;
};

export default DifferentLights;
