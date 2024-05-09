import React from 'react';

const Friend = ({ring}) => {
    return (
        <div className='border border-yellow-500 p-2 mt-5 rounded-lg'>
            <h2>Friend</h2>
            <p>Ring: {ring}</p>
        </div>
    );
};

export default Friend;