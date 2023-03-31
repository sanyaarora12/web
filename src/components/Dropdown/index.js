import { Box, FormControl, InputLabel, MenuItem } from "@mui/material";
import React from "react";

export default function Dropdown({
  handleChange,
  options,
  item,
  selectedValue,
}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Select any of the following
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e) => handleChange(e)}
          value={selectedValue}
        >
          {options.map((ele) => {
            return <MenuItem value={ele.title}>{ele.title}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
