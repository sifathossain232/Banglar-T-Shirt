import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ring}) => {
    return (
        <div className='border border-yellow-500 flex items-center p-2 mt-5 rounded-lg'>
            <div>
                <h2 className='flex justify-center'>MySelf</h2>
                <Special ring={ring}></Special>
            </div>
        </div>
    );
};

export default MySelf;