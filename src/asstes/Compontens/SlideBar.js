import React, { useEffect, useState, useMemo } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import bulbLeft from "../Image/intens1.png"
import bulbRight from "../Image/intens2.png"
import axios from 'axios';
import _ from 'lodash';


const SlideBar = () => {


    const [bri, setBri] = useState(50);
    const changeBri = (value) => {
        setBri(value);
    };

    const throttle = useMemo(() => _.throttle(changeBri, 1000), []);

    useEffect(() => {
        axios(
            'http://192.168.8.100/api/rMqkWU8nZ8UXb0hsfuiY8eSblyVF8fi9WNn642s4/lights/53/state',
            {
                method: 'PUT',
                data: {
                    bri,
                }
            })
    }, [bri])

    return <div>
        <div className='flex'>
            <div className='p-3'>
                <img src={bulbLeft} alt="bulb" />
            </div>
            <Slider
                defaultValue={bri}
                onChange={throttle}
                max={255}
                marks={100}
                step={1}
            />
            <div className='p-2'>
                <img src={bulbRight} alt="bulb" />
            </div>
        </div>
    </div>;
};

export default SlideBar;
