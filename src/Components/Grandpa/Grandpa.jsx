import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const RingContext = createContext('Gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'Daimond'
    const [money, setMoney] = useState(0)
    return (
        <div className='flex justify-center'>
            <div className='border border-yellow-500 p-5 rounded-lg'>
                <h2 className='flex justify-center'>Grandpa</h2>
                <p className='flex justify-center'>Has Money: {money}</p>
                <MoneyContext.Provider value={[money, setMoney]}>
                    <RingContext.Provider value='Golden Ring'>
                        <section className='flex gap-5'>
                            <Father ring={ring}></Father>
                            <Uncle></Uncle>
                            <Aunty ring={ring}></Aunty>
                        </section>
                    </RingContext.Provider>
                </MoneyContext.Provider>
            </div>
        </div>
    );
};

export default Grandpa;

/**
 * 1. Create a context and export
 * 2. Creat a provider and pass a value
 * 3. Use context to recive the value
 * */