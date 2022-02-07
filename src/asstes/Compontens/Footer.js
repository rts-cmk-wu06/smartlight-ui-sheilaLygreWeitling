import React from 'react';
import bulb from "../Image/bulb.png"
import home from "../Image/home.png"
import settings from "../Image/settings.png"

const Footer = () => {
    return <div>
        <div className='bg-white flex justify-evenly p-4 min-h-[100vh]'>
            <button>
                <img src={bulb} alt="bulb" />
            </button>
            <button>
                <img src={home} alt="home" />
            </button>
            <button>
                <img src={settings} alt="Cogwheel" />
            </button>
        </div>
    </div>;
};

export default Footer;
