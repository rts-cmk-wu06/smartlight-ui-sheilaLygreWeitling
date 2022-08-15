import extraBtn from '../Image/EkstraBtn.svg';
import React from 'react';
import { useEffect } from 'react';
import ChangeColorButton from './ChangeColorButton';

const ColorButtons = () => {

    const ColorArray = [
        { "red": 255, "green": 155, "blue": 155 },
        { "red": 148, "green": 235, "blue": 158 },
        { "red": 148, "green": 202, "blue": 235 },
        { "red": 165, "green": 148, "blue": 235 },
        { "red": 222, "green": 148, "blue": 235 },
        { "red": 235, "green": 208, "blue": 148 }
    ]

    return <div>
        <>
            <h2 className="SubTitleStyle pt-[29px]">Colors</h2>
            <div className='flex gap-x-[16px] mt-[23px] '>
                {ColorArray.map(({ red, green, blue }) => (
                    <ChangeColorButton r={red} g={green} b={blue} />
                ))}
                <div className="w-[29px] h-[29px]"><img src={extraBtn} alt="extra button" /></div>
            </div>
        </>
    </div>;
};

export default ColorButtons;

