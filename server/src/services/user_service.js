
const User = require("../models/user_model")

const createUser = async(userData) => {
    try {
        
        let {firstName, lastName, email , password} = userData;

        const isUserExist = await User.findOne({email});

        if(isUserExist){
            throw new Error ("User already exist with email :", email) 
        }

    } catch (error) {
        
    }
}