import React from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>Borolokxxx</h3>
            <p>Thanks for giving your money</p>
        </div>
    }
    return (
        <div className='' >
            <h2 className={`'text-xl mb-3' ${cart.length === 1 ? 'text-blue-500 text-xl mb-3' : 'text-red-500 text-xl mb-3'}`}>Order Summary: {cart.length}</h2>
            {cart.length > 2 ? <span>Aro kino tumr jonno akta gift ace</span> : <span>Fokira hai toh...</span>}
            {message}
            {
                cart.map((tshirt, index) => {
                    return (
                        <div
                            key={index}
                        >{tshirt.name} <button
                            onClick={() => handleRemoveFromCart(tshirt._id)}
                        >X</button> </div>
                    )
                })
            }
            {
                cart.length === 2 && <p>Double bonanza!!!</p>
            }
            {
                cart.length === 3 || <p>Tinta toh hoilona</p>
            }
        </div>
    );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. Use if else set a variable that will contain an element, components
 * 2. Ternary: Condition ? 'for true' : 'false'
 * 3. Logical &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||: (if the condition is false then the next thing will be dsiplayed)
 * */

/**
 * CONDITIONAL CSS Class
 * 1. Use tarnary
 * 2. Use template string
 * */