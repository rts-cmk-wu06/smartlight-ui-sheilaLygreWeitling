import React from 'react';
import Slider from 'react-input-slider';
import { useState } from 'react';


const SlideBar = () => {
    const [state, setState] = useState({ x: 0, y: 0 });

    return <div>

        <Slider
            axis="x"
            x={state.x}
            onChange={({ x }) => setState(state => ({ ...state, x }))}

        />
    </div>;
};

export default SlideBar;
