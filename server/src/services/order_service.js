const cartService = require("../services/cart_service")

const Address = require("../models/address_model");

const createOrder = async(user, shipAddress) => {
    let address;

    if(shipAddress._id){
        let existAddress = await Address.findById(shipAddress._id);

        address = existAddress;
    }
    else{
        address = new Address(shipAddress);
        address.user = user;
        await address.save();

        user.addresses.push(address);
        await user.save(); 
    }

    
}