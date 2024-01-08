import React from "react";
import { Grid, LinearProgress, Rating, Box } from "@mui/material";

const ProductAvgRating = () => {
  return (
    <>
      <h1 className="text-xl font-semibold pb-2"> Product Ratings </h1>
      <div className="flex items-center space-x-4">
        <Rating name="readOnly" value={4.6} precision={0.5} />
        <p className="opacity-60"> Total how much Ratings 4220 Ratings</p>
      </div>

      <Box className="mt-5 space-y-3">
        <Grid container alignItems="center" gap={2}>
          <Grid item xs={2}>
            <p>Excellent</p>
          </Grid>
          <Grid item xs={7}>
            <LinearProgress
              sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
              variant="determinate"
              value={40}
              color="success"
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" gap={2}>
          <Grid item xs={2}>
            <p> Very Good</p>
          </Grid>
          <Grid item xs={7}>
            <LinearProgress
              sx={{
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "lime", // Color for the progress
                },
                bgcolor: "#d0d0d0",
                borderRadius: 4,
                height: 7,
              }}
              variant="determinate"
              value={30}
              color="success"
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" gap={2}>
          <Grid item xs={2}>
            <p> Good </p>
          </Grid>
          <Grid item xs={7}>
            <LinearProgress
              sx={{
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#FFD700", // Color for the progress
                },
                bgcolor: "#d0d0d0",
                borderRadius: 4,
                height: 7,
              }}
              variant="determinate"
              value={25}
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" gap={2}>
          <Grid item xs={2}>
            <p> Average </p>
          </Grid>
          <Grid item xs={7}>
            <LinearProgress
              sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
              variant="determinate"
              value={20}
              color="warning"
            />
          </Grid>
        </Grid>
        <Grid container alignItems="center" gap={2}>
          <Grid item xs={2}>
            <p> Poor </p>
          </Grid>
          <Grid item xs={7}>
            <LinearProgress
              sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }}
              variant="determinate"
              value={15}
              color="error"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductAvgRating;
