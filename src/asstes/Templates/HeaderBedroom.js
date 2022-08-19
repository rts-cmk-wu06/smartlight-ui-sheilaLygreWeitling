import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Arrow from '../Compontens/Arrow';
import LampSVG from '../Compontens/LampSVG';

const HeaderBedroom = () => {
    const { name } = useParams();

    const [groups, setGroups] = useState();

    useEffect(() => {
        fetch(
            "http://192.168.8.100/api/rMqkWU8nZ8UXb0hsfuiY8eSblyVF8fi9WNn642s4/groups/" + name,
            {
                method: "GET",
            }
        ).then(res => res.json()).then((res) => {
            setGroups(res)
        })
    }, [])


    return <div>
        {groups && (
            <div className='flex'>
                <div className='flex items-center'>
                    <div className='items-center p-4'>
                        <Arrow />
                    </div>
                    <div className='flex-col p-4 '>
                        <div className='text-white text-2xl '>
                            {groups.name}
                        </div>
                        <div className=' text-l text-yellow-500 font-bold p-4'>
                            <p>Lights: {groups.lights.length}</p>
                        </div>
                    </div>
                </div>
                <LampSVG />
            </div>
        )}
    </div>;
};

export default HeaderBedroom;
