import React from 'react';
import MySelf from '../MySelf/MySelf';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Father = ({ring}) => {
    return (
        <div className='border border-yellow-500 flex items-center p-2 mt-5 rounded-lg'>
            <div>
                <h2 className='flex justify-center'>Father</h2>
                <section className='flex gap-5'>
                    <MySelf ring={ring}></MySelf>
                    <Brother></Brother>
                    <Sister></Sister>
                </section>
            </div>
        </div>
    );
};

export default Father;