import React from "react";

import hamburger1 from "../images/1 burger.png";
import hamburger2 from "../images/2 burger.png";
import hamburger3 from "../images/3 burger.png";
import hamburger4 from "../images/4 burger.png";
import { Grid } from "@mui/material";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div>
      <Grid
        container
        sx={{
          margin: "20px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <MenuItem image={hamburger1} title={"Menu 1"} price={75} />
        <MenuItem image={hamburger2} title={"Menu 2"} price={85} />
        <MenuItem image={hamburger3} title={"Menu 3"} price={95} />
        <MenuItem image={hamburger4} title={"Menu 4"} price={105} />
        <MenuItem image={hamburger2} title={"Menu 4"} price={105} />
        <MenuItem image={hamburger3} title={"Menu 4"} price={105} />
        <MenuItem image={hamburger1} title={"Menu 4"} price={105} />
        <MenuItem image={hamburger4} title={"Menu 4"} price={105} />
        <MenuItem image={hamburger2} title={"Menu 4"} price={105} />
      </Grid>
    </div>
  );
}

export default Menu;
