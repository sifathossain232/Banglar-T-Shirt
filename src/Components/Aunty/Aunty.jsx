import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ring}) => {
    return (
        <div className='border border-yellow-500 flex items-center p-2 mt-5 rounded-lg'>
            <div>
                <h2 className='flex justify-center'>Aunty</h2>
                <section className='flex gap-5'>
                    <div className='border border-yellow-500 flex items-center p-2 mt-5 rounded-lg'>
                        <Cousin><p className='flex justify-center'>Abir</p></Cousin>
                    </div>
                    <div className='border border-yellow-500 flex items-center p-2 mt-5 rounded-lg'>
                        <Cousin hasFriend={true} ring={ring}><p className='flex justify-center'>Nibir</p></Cousin>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Aunty;