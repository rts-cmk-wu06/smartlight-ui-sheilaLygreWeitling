import React from 'react';
import BedRoomIcon from "../Image/bed.png"
import LivingRoomIcon from "../Image/living.png"
import KitchenIcon from "../Image/kitchen.png"
import BathroomIcon from "../Image/bathtube.png"
import OutdoorIcon from "../Image/house.png"
import BalconyIcon from "../Image/balcony.png"


const Button = () => {

    const RoomNames = [
        {
            image: BedRoomIcon,
            room: "Bed Room",
            lights: "4 Lights"
        },
        {
            image: KitchenIcon,
            room: "Living Room",
            lights: "2 Lights"
        },
        {
            image: LivingRoomIcon,
            room: "Kitchen",
            lights: "5 Lights"
        },
        {
            image: BathroomIcon,
            room: "Bathroom",
            lights: "1 Lights"
        },
        {
            image: OutdoorIcon,
            room: "Outdoor",
            lights: "5 Lights"
        },
        {
            image: BalconyIcon,
            room: "Balcony",
            lights: "2 Lights"
        }
    ]

    return <div>
        <div className='bg-gray-50 border border-none inline-grid grid-cols-2 gap-6 w-full p-6'>
            {RoomNames.map(({ image, room, lights }) => (
                <button className='w-full text-left bg-white shadow-xl p-3 rounded-xl'>
                    <img src={image} alt="icon" />
                    <p className='text-xl'>{room}</p>
                    <p className='text-xs text-yellow-500 font-bold'>{lights}</p>
                </button>
            ))}
        </div>
    </div>;
};

export default Button;
