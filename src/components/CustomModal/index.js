import { Box, Dialog } from "@mui/material";
//import PropTypes from "prop-types";
import React from "react";

export default function CustomModal({ open, onClose, children }) {
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <button type="button">x</button>
        <Box onClick={onClose}>{children}</Box>
      </Dialog>
    </div>
  );
}
