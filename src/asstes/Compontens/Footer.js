import React from 'react';
import bulb from "../Image/bulb.png"
import home from "../Image/home.png"
import settings from "../Image/settings.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    return <div>
        <div className=' flex justify-evenly p-4 '>
            <button>
                <img src={bulb} alt="bulb" />
            </button>
            <Link to="/">
                <button >
                    <img src={home} alt="home" />
                </button>
            </Link>
            <button>
                <img src={settings} alt="Cogwheel" />
            </button>
        </div>
    </div>;
};

export default Footer;
