import React from 'react'

const ChangeableLights = () => {
    return (
        <div>
            {roomArray.map((i) => {
                <Link to={`/details/${HeaderBedroom.lights}`}>
                    <button key={i}>
                    </button>
                </Link>
            })}
        </div>
    )
}

export default ChangeableLights