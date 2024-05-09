import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(tshirt => tshirt._id === tshirt._id)
        if (exists) {
            toast('You have already added this t-shirt')


        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }

        // const newCart = [...cart, tshirt];
        //     setCart(newCart);
        // }    
    }

    const handleRemoveFromCart = id => {
        const remaining = cart.filter(tshirt => tshirt._id !== id);
        setCart(remaining);
    }

    return (
        <div className='grid grid-cols-4 gap-4 w-9/12 m-auto'>
            <div className='grid grid-cols-subgrid col-span-3 gap-4'>
                {
                    tshirts.map((tshirt) => <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart} ></Tshirt>)
                }
            </div>
            <div className='relative'>
                <div className='absolute flex justify-center  w-full'>
                    <Cart
                        cart={cart}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;