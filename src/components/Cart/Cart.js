import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(props);
    const cart = props.cart;
    let total = 0;
    let playerName ="";
    for(let i=0; i<cart.length; i++) {
        const player = cart[i];
        total = total + player.price;
        playerName = playerName + " " + player.name;
        // console.log(player, total,nm);

    }
    return (
        <div>
            <h3>Selected Player: {cart.length}</h3>
            <p>Name: {playerName}</p>
            <h3>Total cost for player: {total}</h3>

        </div>
    );
};

export default Cart;