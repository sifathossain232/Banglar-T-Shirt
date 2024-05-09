import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {
    const angti = useContext(RingContext)
    return (
        <div className='border border-yellow-500 p-2 mt-5 rounded-lg'>
            <h2>Special</h2>
            <p>Ring: {ring}</p>
        </div>
    );
};

export default Special;