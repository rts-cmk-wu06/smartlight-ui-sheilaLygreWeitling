import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Button = () => {

    const [groups, setGroups] = useState();

    useEffect(() => {
        fetch(
            "http://192.168.8.100/api/rMqkWU8nZ8UXb0hsfuiY8eSblyVF8fi9WNn642s4/groups",
            {
                method: "GET",
            }
        ).then(res => res.json()).then((data) => {
            setGroups(data)
            console.log(data);
        })
    }, [])


    const fadeVariants = {
        hidden: { opacity: 0 },
        shown: {
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    };


    return <div>
        <motion.div
            variants={fadeVariants}
            animate="shown"
            initial="hidden"
            className="flex flex-col gap-2 h-full"
        >
            <div className=' border border-none inline-grid grid-cols-2 gap-6 w-full p-6'>
                {groups && Object.values(groups).map(({ name, lights }, i) => {
                    const id = Object.keys(groups)[i];
                    return (<Link to={`/details/${id}`} key={i}>
                        <button className='w-full text-left bg-white shadow-xl p-3 rounded-xl' key={i}>
                            <p className='text-xl'>{name}</p>
                            <p className='text-xs text-yellow-500 font-bold'> Lights {lights.length}</p>
                        </button>
                    </Link>)
                })}
            </div>
        </motion.div>
    </div>;
};

export default Button;
