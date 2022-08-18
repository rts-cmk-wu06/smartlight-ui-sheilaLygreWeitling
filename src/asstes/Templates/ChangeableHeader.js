import React from 'react'
import Home from '../Pages/Home'

const ChangeableHeader = () => {

    const roomArray = [
        {
            icon: 'bed.png',
            name: 'BedRoom',
            lights: '4 Lights'
        },
        {
            icon: 'living.png',
            name: 'LivingRoom',
            lights: '2 Lights'
        },
        {
            icon: 'kitchen.png',
            name: 'Kitchen',
            lights: '5 Lights'
        },
        {
            icon: 'bathtube.png',
            name: 'BathRoom',
            lights: '1 Lights'
        },
        {
            icon: 'house.png',
            name: 'Outdoor',
            lights: '5 Lights'
        },
        {
            icon: 'balcony.png',
            name: 'Balcony',
            lights: '2 Lights'
        }
    ]



    return (
        <div>
            {roomArray.map(({ room, icon, lights }, i) => {
                return <Home key={i} room={room} icon={icon} lights={lights} />;
            })}
        </div>
    )
}

export default ChangeableHeader