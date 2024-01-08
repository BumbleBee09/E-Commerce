import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg"> Ram </p>
              <p className="opacity-70"> January 1, 2024</p>
            </div>
          </div>

          <Rating value={4.5} name="half-rating" precision={0.5} readOnly />

          <p> Product Reviews are here. It is very nice Product. </p>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductReviewCard;
