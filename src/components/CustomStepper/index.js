import { CheckBox } from "@mui/icons-material";
import React from "react";

export default function Checkboxes({ title, handleChange }) {
  return (
    <div>
      <CheckBox name={title} onChange={handleChange} value={title} />
      {title}
    </div>
  );
}
