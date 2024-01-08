import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OderDetails = () => {
  return (
    <div className="pt-[3%] lg:px-20 px-5">
      <div>
        <h1 className="font-bold text-lg py-7"> Delivery Address </h1>
        <AddressCard />
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid className="space-y-5" container>
      {[1,1,1,1,1].map((item) =>         <Grid
          item
          container
          className="shadow-md rounded-md p-5 border shadow-gray-300 hover:shadow-2xl"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-5 cursor-pointer">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70"
                alt="Order"
              />
              <div className="ml-5 space-y-2">
                <p className="text-md font-semibold">
                  Men Embroidered Jacquard Straight Kurta
                </p>
                <p className="opacity-50 text-sm font-semibold space-x-5">
                  <span>Size: XXL</span>
                  <span>Color: Black</span>
                </p>
                <p className="text-sm font-semibold"> Price : ₹2499 </p>
              </div>
            </div>
          </Grid>
          <Grid item>
            <Box sx={{color:"purple"}}>
            <StarBorderIcon sx={{fontSize: "3rem"}} className="px-2"/>
            <span> Rate & Review Products </span>
            </Box>
          </Grid>
        </Grid> )}

      </Grid>
    </div>
  );
};

export default OderDetails;
