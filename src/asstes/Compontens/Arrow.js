import React from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';



const Arrow = () => {
    return <div>
        <Link to="/">
            <button className='text-white text-lg'><BsArrowLeft /></button>
        </Link>
    </div >;
};

export default Arrow;
