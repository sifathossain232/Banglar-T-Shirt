import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({children,hasFriend, ring}) => {
    return (
        <div>
            <h2 className='flex justify-center mb-2'>Cousin</h2>
            <p>{children}</p>
            { hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cousin;