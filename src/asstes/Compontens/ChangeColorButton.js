import React, { useState } from 'react'
import ColorConverter from 'cie-rgb-color-converter';
import { useParams } from 'react-router-dom';

const ChangeColorButton = ({ r, g, b }) => {
    const [color, setColor] = useState([]);
    const { name } = useParams();
    let xy = ColorConverter.rgbToXy(r, g, b);

    function changeColor() {
        setColor(xy);
        fetch(
            "http://192.168.8.100/api/rMqkWU8nZ8UXb0hsfuiY8eSblyVF8fi9WNn642s4/groups/" + name + "/action",
            {
                method: "PUT",
                body: JSON.stringify({
                    xy: [color.x, color.y]
                }),
            }
        );
    }

    return (
        <div>
            <button onClick={() => {
                changeColor(xy);
                console.log(xy);
            }} className="w-[29px] h-[29px] rounded-full changeColor" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}></button>
        </div>
    )
}

export default ChangeColorButton