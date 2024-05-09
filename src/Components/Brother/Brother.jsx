import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(RingContext)
    return (
        <div className='border border-yellow-500 flex flex-col justify-center items-center p-2 mt-5 rounded-lg'>
            <h2>Brother</h2>
            <p>{ring}</p>
        </div>
    );
};

export default Brother;