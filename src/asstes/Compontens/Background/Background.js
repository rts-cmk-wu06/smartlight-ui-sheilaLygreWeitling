import React from 'react';

const Background = () => {
    return <div className='grid grid-rows-4 grid-cols-4 gap-4'>
        <div className="w-40 h-40 rounded-full bg-gray-50 bg-opacity-20 ">
        </div>

        <div className="w-60 h-60 rounded-full bg-gray-50 bg-opacity-20 row-span-3 col-span-1">
        </div>

        <div className="w-60 h-60 rounded-full bg-gray-50 bg-opacity-20 row-span-5 col-span-1 place-self-center">
        </div>

        <div className="w-40 h-40 rounded-full bg-gray-50 bg-opacity-20 row-span-4 col-span-1">
        </div>
    </div>
};

export default Background;
