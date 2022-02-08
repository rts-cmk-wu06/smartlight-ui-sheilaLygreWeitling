import React from 'react';
import Slider from 'react-input-slider';
import { useState } from 'react';
import bulbLeft from "../Image/intens1.png"
import bulbRight from "../Image/intens2.png"


const SlideBar = () => {
    const [state, setState] = useState({ x: 0, y: 0 });

    return <div>
        <div className='flex'>
            <div className='p-3'>
                <img src={bulbLeft} alt="bulb" />
            </div>
            <div className='p-2'>
                <Slider
                    axis="x"
                    x={state.x}
                    onChange={({ x }) => setState(state => ({ ...state, x }))}
                    styles={{
                        track: {
                            backgroundColor: 'gray',
                            width: 258,
                            height: 1
                        },
                        active: {
                            backgroundColor: 'gray'
                        },
                        thumb: {
                            width: 10,
                            height: 10
                        },
                        disabled: {
                            opacity: 0.5
                        }
                    }}
                />
            </div>
            <div className='p-2'>
                <img src={bulbRight} alt="bulb" />
            </div>
        </div>
    </div>;
};

export default SlideBar;
