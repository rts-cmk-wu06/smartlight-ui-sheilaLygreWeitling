import React from 'react';
import BedRoomIcon from "../Image/bed.png"
import LivingRoomIcon from "../Image/living.png"
import KitchenIcon from "../Image/kitchen.png"
import BathroomIcon from "../Image/bathtube.png"
import OutdoorIcon from "../Image/house.png"
import BalconyIcon from "../Image/balcony.png"
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";


const Button = () => {

    const fadeVariants = {
        hidden: { opacity: 0 },
        shown: {
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    };

    const RoomNames = [
        {
            image: BedRoomIcon,
            room: "BedRoom",
            lights: "4 Lights",
            id: 1
        },
        {
            image: LivingRoomIcon,
            room: "LivingRoom",
            lights: "2 Lights",
            id: 2
        },
        {
            image: KitchenIcon,
            room: "Kitchen",
            lights: "5 Lights",
            id: 3
        },
        {
            image: BathroomIcon,
            room: "Bathroom",
            lights: "1 Lights",
            id: 4
        },
        {
            image: OutdoorIcon,
            room: "Outdoor",
            lights: "5 Lights",
            id: 5
        },
        {
            image: BalconyIcon,
            room: "Balcony",
            lights: "2 Lights",
            id: 6
        }
    ]

    return <div>
        <motion.div
            variants={fadeVariants}
            animate="shown"
            initial="hidden"
            className="flex flex-col gap-2 h-full"
        >
            <div className=' border border-none inline-grid grid-cols-2 gap-6 w-full p-6'>
                {RoomNames.map(({ image, room, lights }, i) => (
                    <NavLink to={`/${room}`} key={i}>
                        <button className='w-full text-left bg-white shadow-xl p-3 rounded-xl' key={i}>
                            <img src={image} alt="icon" />
                            <p className='text-xl'>{room}</p>
                            <p className='text-xs text-yellow-500 font-bold'>{lights}</p>
                        </button>
                    </NavLink>
                ))}
            </div>
        </motion.div>
    </div>;
};

export default Button;
