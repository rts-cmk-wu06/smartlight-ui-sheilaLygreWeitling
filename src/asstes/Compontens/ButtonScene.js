import React from 'react';
import LightBulb from "../Image/ligthBulb.png"

const ButtonScene = () => {
    const sceneArray = [
        {
            scene: "Birthday",
            color: "#FF9B9B"
        },
        {
            scene: "Party",
            color: "#94EB9E"
        },
        {
            scene: "Relax",
            color: "#94CAEB"
        },
        {
            scene: "Fun",
            color: "#DE94EB"
        },
    ]

    return <div>
        <>
            <h2 className="SubTitleStyle pt-[29px]">Scenes</h2>
            <div className='grid grid-cols-2 gap-x-[25px] gap-y-[19px] mt-[23px]' >
                {sceneArray.map((theme) => (
                    <button className="w-[150px] h-[55px] rounded-xl text-white font-bold text-sm flex items-center justify-start gap-[23px]" style={{ background: theme.color }}>
                        <img src={LightBulb} alt="bulb" className='pl-[25px]' />
                        {theme.scene}</button>
                ))}

            </div>
        </>
    </div>;
};

export default ButtonScene;
