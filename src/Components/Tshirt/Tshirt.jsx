import React from 'react';

const Tshirt = ({ tshirt,handleAddToCart }) => {
    const { picture, name, price , } = tshirt;
    return (
        <div className=' border border-sky-100 rounded-2xl p-3 flex justify-center'>
            <div className='flex flex-col items-center'>
                <img className='h-64 rounded-2xl' src={picture} alt="" />
                <div className='mt-5 leading-6'>
                    <h4 className='text-base font-medium'>{name}</h4>
                    <p className='opacity-80'>Price: <span className='text-orange-500'>${price}</span></p>
                    <button onClick={()=>handleAddToCart(tshirt )} className='my-5'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tshirt;