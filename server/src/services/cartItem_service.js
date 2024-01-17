const userService = require("../services/user_service");

const updateCartItem = async(userId, cartItemId, cartItemData) => {

    try {

        const item = await findCartItemById(cartItemId);

        if(!item){
            throw new Error("Cart Item not found: ", cartItemId);
        }

        const user = await userService.findUserById(item.userId);

        
        if(!user){
            throw new Error("user not found: ", userId);
        }

        if(user._id.toString() === userId.toString()){
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice;

            const updateCartItem = await item.save();

            return updateCartItem;
        }
        
        else{
            throw new Error("You can't update this cart item")
        }

    } catch (error) {
        throw new Error("eror while updating the cart item:",error.message);
    }
}

// const removeCartItem = async(userId, cartItemId) => {
//     const cartITem
// }