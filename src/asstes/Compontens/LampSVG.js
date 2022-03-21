import React from 'react';
import { ReactComponent as Logo } from "../Image/bulbColorChange.svg"
import lampNoBulb from "../Image/lampNoBulb.png"

const LampSVG = () => {

    return <div>
        <div className='grid grid-rows-4 grid-cols-4 pb-9 '>

            <img src={lampNoBulb} alt="Lamp" className='row-start-1 col-start-1 row-end-5 col-end-5 z-10 ' />

            <Logo className="lampSVG row-start-4 col-start-1 row-end-5 col-end-5 w-full mt-[19px] " />

        </div>
    </div>;
};

export default LampSVG;
