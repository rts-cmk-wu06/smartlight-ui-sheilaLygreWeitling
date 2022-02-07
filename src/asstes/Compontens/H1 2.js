import React from 'react';

const H1 = ({ title, span }) => {
    return <div>
        <h1 className='text-white font-bold text-3xl p-4'> {title}<span className='font-normal'>{span}</span></h1>
    </div>;
};

export default H1;
