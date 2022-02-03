import React from 'react';
import Home from "../../Image/home.png";
import Bulb from "../../Image/bulb.png";
import Settings from "../../Image/settings.png"

const Footer = () => {
    return <div>
        <div className='bg-white flex justify-evenly p-4'>
            <button><img src={Bulb} alt="Lightbulb" /></button>
            <button><img src={Home} alt="Home" /></button>
            <button><img src={Settings} alt="Settings" /></button>
        </div>
    </div>;
};

export default Footer;
