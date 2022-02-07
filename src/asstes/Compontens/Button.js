import React from 'react';
import BedRoomIcon from "../Image/bed.png"
import LivingRoomIcon from "../Image/living.png"
import KitchenIcon from "../Image/kitchen.png"
import BathroomIcon from "../Image/bathtube.png"
import OutdoorIcon from "../Image/house.png"
import BalconyIcon from "../Image/balcony.png"
import { NavLink } from 'react-router-dom';

const Button = () => {

    const RoomNames = [
        {
            image: BedRoomIcon,
            room: "BedRoom",
            lights: "4 Lights",
            id: 1
        },
        {
            image: KitchenIcon,
            room: "LivingRoom",
            lights: "2 Lights",
            id: 2
        },
        {
            image: LivingRoomIcon,
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
        <div className='bg-gray-50 border border-none inline-grid grid-cols-2 gap-6 w-full p-6'>
            {RoomNames.map(({ image, room, lights }, i) => (
                <NavLink to={`/Home/${room}`} key={i}>
                    <button className='w-full text-left bg-white shadow-xl p-3 rounded-xl' key={i}>
                        <img src={image} alt="icon" />
                        <p className='text-xl'>{room}</p>
                        <p className='text-xs text-yellow-500 font-bold'>{lights}</p>
                    </button>
                </NavLink>
            ))}
        </div>
    </div>;
};

export default Button;
