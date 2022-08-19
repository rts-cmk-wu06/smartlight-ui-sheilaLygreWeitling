import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import offIcon from '../Image/offIcon.png'

const TurnOff = () => {

    const [on, setOn] = useState(true);
    let { name } = useParams();

    useEffect(() => {
        axios({
            url: 'http://192.168.8.100/api/rMqkWU8nZ8UXb0hsfuiY8eSblyVF8fi9WNn642s4/groups/' + name + '/action',
            method: 'PUT',
            data: {
                on
            }
        }
        )
    }, [on])

    return (
        <div>
            <button>
                <img src={offIcon} alt="turn off icon" onClick={() => setOn(!on)} />
            </button>
        </div>
    )
}

export default TurnOff