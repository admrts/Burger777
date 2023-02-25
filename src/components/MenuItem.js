import React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
function MenuItem({ image, title, price }) {
  return (
    <Grid mx={3}>
      <Card
        sx={{
          width: 400,
          height: 600,
          backgroundColor: "#272626",
          boxShadow: "0 0 10px #272626",
        }}
      >
        <CardMedia sx={{ height: 450 }} image={image} title="green iguana" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "lightgray" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "lightgray" }}>
            $ {price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color="success">Order</Button>
          <Button color="info">Detail</Button>
        </CardActions>
      </Card>{" "}
    </Grid>
  );
}

export default MenuItem;
