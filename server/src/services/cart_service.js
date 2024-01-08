const Cart = require("../models/cart_model");

async function createCart(users) {

    try {
        const cart = new Cart({users});

        const createdCart = await cart.save();
    
        return createdCart;

    } catch (error) {
        throw new Error(error.message);
    }

}

module.exports = {createCart};