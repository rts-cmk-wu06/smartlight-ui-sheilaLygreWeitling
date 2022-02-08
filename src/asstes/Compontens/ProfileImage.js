import React from 'react';
import avatar from "../Image/darthvader.jpg"

const ProfileImage = () => {
    return <div>
        <div className='rounded-full p-4'>
            <div className='relative'>
                <span className='absolute top-1 right-0 w-[10px] h-[10px] bg-[#FF9898] rounded-full border-[#707070] border-2'></span>
                <img className='rounded-full w-[53px] h-[53px] object-cover border-2' src={avatar} alt="avatar" />
            </div>
        </div>
    </div>;
};

export default ProfileImage;
