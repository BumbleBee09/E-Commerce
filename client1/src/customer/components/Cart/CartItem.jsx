import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex item-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
            alt="Cart Item"
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">Product Title</p>
          <p className="opacity-70">Size and Color</p>
          <p className="opacity-70 mt-2">Seller : Brand Name</p>
          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">100</p>
            <p className="opacity-50 line-through">1000</p>
            <p className="text-green-600 font-semibold">90%</p>
          </div>
        </div>
      </div>
      
      <div className="lg:flex items-center lg:spcae-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton sx={{color:"red"}}>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm"> 3 </span>
              <IconButton sx={{color:"green"}}>
                <AddCircleOutlineIcon />
              </IconButton>
          </div>

          <div className="ml-8">
            <Button variant="outlined" color="error">Remove</Button>
          </div>
        </div>
    </div>
  );
};

export default CartItem;
