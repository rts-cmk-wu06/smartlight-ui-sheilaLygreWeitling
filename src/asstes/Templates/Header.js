import { motion } from 'framer-motion';
import React from 'react';
import H1 from '../Compontens/H1';
import ProfileImage from '../Compontens/ProfileImage';

const PageName = () => {


    return <div >
        <motion.div className='flex justify-between items-center' >
            <H1 title="Control" span="Panel" />
            <ProfileImage />
        </motion.div>
    </div>;
};

export default PageName;

