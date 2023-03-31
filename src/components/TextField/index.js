import { TextField } from "@mui/material";
import React from "react";

export default function CustomTextField({ handleChange, key }) {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      onChange={(e) => handleChange(e, key)}
    />
  );
}
