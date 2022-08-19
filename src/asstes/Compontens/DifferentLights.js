import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import { useRef } from 'react';
import { useParams } from 'react-router-dom';


const DifferentLights = ({ main, desk, bed }) => {

    let { name } = useParams();
    const [singleLight, setSingleLight] = useState();

    function changeSingleLight() {
        setSingleLight(singleLight);
        fetch(
            "http://192.168.8.100/api/rMqkWU8nZ8UXb0hsfuiY8eSblyVF8fi9WNn642s4/groups/" + name,
            {
                method: "PUT",
                body: JSON.stringify({
                    on: singleLight,
                }),
            }
        );
    }

    const constraintsRef = useRef(null)
    console.log(singleLight);
    return <div>
        <div ref={constraintsRef} className='overflow-hidden'>
            <motion.div drag="x" dragConstraints={{ left: -100, right: 0, top: 0, bottom: 0 }} className='flex' >
                <button onClick={() => { changeSingleLight(singleLight) }} className='flex bg-white p-3 rounded-xl text-xs font-bold m-2 text-blue-900 min-w-[124px]' > turn off light</button>
            </motion.div>
        </div>
    </div >;
}

//VIRKER IKKE ):

export default DifferentLights;
