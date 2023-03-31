import { Checkbox } from "@mui/material";
import React from "react";

export default function Checkboxes({ title, handleChange }) {
  return (
    <div>
      <Checkbox name={title} onChange={handleChange} value={title} />
      {title}
    </div>
  );
}
