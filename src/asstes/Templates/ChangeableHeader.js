import { Link } from 'react-router-dom'
import HeaderBedroom from './HeaderBedroom'

const ChangeableHeader = () => {

    return (
        <div>
            {roomArray.map((i) => {
                <Link to={`/details/${HeaderBedroom.name}`}>
                    <button key={i}>
                    </button>
                </Link>
            })}
        </div>
    )
}

export default ChangeableHeader