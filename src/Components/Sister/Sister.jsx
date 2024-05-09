import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(MoneyContext)
    return (
        <div className='border border-yellow-500 flex flex-col items-center p-2 mt-5 rounded-lg'>
            <h2>Sister</h2>
            <p>Grandpa Money: {money}</p>
        </div>
    );
};

export default Sister;