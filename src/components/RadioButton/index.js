import { FormControl, RadioGroup } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

export default function RadioButtons({ handleChange, options, selectedValue }) {
  return (
    <FormControl>
      <RadioGroup
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 22,
            marginTop: "5px",
            margin: "5px",
          },
        }}
        row
        defaultValue="female"
        name="radio-buttons-group"
        onChange={(e) => handleChange(e)}
        value={selectedValue}
      >
        {options.map((ele) => {
          return (
            <div>
              <div>
                <FormControlLabel control={<Radio />} value={ele.title}>
                  {ele.title}
                </FormControlLabel>
              </div>
              <div>
                <FormLabel
                  style={{
                    color: "black",
                    marginTop: "12px",
                    fontSize: 17,
                    marginLeft: "-12px",
                  }}
                  id="demo-radio-buttons-group-label"
                >
                  {ele.title}
                </FormLabel>
              </div>
            </div>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}

RadioButtons.propTypes = {
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.func.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
RadioButtons.defaultValue = {
  handleChange: () => null,
};
