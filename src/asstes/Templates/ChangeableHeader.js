import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeaderBedroom from './HeaderBedroom'


const ChangeableHeader = () => {

    const container = {
        hidden: { opacity: 0, x: '-100vw' },
        show: {
            opacity: 1, x: 0, transition: { duration: 1, ease: "easeIn" },
            transition: {
                staggerChildren: 0.5
            }
        }
    }

    const item = {
        hidden: { opacity: 0, x: '-100vw' },
        show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeIn" } }
    }


    return (
        <div>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show">
                {roomArray.map((i) => {
                    <Link to={`/details/${HeaderBedroom.name}`}>
                        <button key={i} variants={item}>
                        </button>
                    </Link>
                })}
            </motion.div>
        </div>
    )
}

export default ChangeableHeader