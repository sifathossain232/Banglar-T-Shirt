import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div className='border border-yellow-500 flex items-center p-2 mt-5 rounded-lg'>
            <div>
                <h2 className='flex justify-center'>Uncle</h2>
                <p className='flex justify-center'>Grandpa Money: {money}</p>
                <button onClick={() => setMoney(money + 1000)} className='flex justify-center'>Send 1000Tk</button>
                <section className='flex gap-5'>
                    <div className='border border-yellow-500 flex items-center p-2 mt-5 rounded-lg'>
                        <Cousin><p className='flex justify-center'>Nabil</p></Cousin>
                    </div>
                    <div className='border border-yellow-500 flex items-center p-2 mt-5 rounded-lg'>
                        <Cousin><p className='flex justify-center'>Nabila</p></Cousin>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Uncle;