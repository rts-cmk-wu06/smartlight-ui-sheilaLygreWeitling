import React from 'react';
import LightBulb from "../Image/ligthBulb.png"
import "../../css/App.css"

const ButtonScene = () => {
    const sceneArray = [
        {
            scene: "Birthday",
            color: "#FF9B9B"
        },
        {
            scene: "Party",
            color: "#A693EB"
        },
        {
            scene: "Relax",
            color: "#93CAEB"
        },
        {
            scene: "Fun",
            color: "#89DD94"
        },
    ]

    return <div>
        <>
            <h2 className="SubTitleStyle pt-[29px]">Scenes</h2>
            <div className='grid grid-cols-2 gap-x-[25px] gap-y-[19px] mt-[23px]' >
                {sceneArray.map((theme) => (
                    <button className={`w-[150px] h-[55px] rounded-xl text-white font-bold text-sm flex items-center justify-start gap-[23px] gradient${theme.scene}`}>
                        <img src={LightBulb} alt="bulb" className='pl-[25px]' />
                        {theme.scene}</button>
                ))}

            </div>
        </>
    </div>;
};

export default ButtonScene;
