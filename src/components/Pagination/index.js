import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

export default function Pagination({
  pageNumber,
  maxRecordNumber,
  recordPerPage,
  bulkSkip,
  onPageChange,
}) {
  const maxPageNumber = Math.ceil(maxRecordNumber / recordPerPage);
  const recordNumber = pageNumber * recordPerPage;

  const onBulkBack = () => {
    onPageChange(Math.max(1, pageNumber - bulkSkip));
  };
  const onBulkfront = () => {
    onPageChange(Math.min(maxPageNumber, pageNumber + bulkSkip));
  };
  const onBack = () => {
    onPageChange(pageNumber - 1);
  };
  const onFront = () => {
    onPageChange(pageNumber + 1);
  };
  return (
    <div>
      <Button onClick={onBulkBack} disabled={pageNumber <= 1}>
        b1
      </Button>
      <Button onClick={onBack} disabled={pageNumber <= 1}>
        b2
      </Button>
      <Box>
        <span>{recordNumber - recordPerPage + 1}</span>
        <span>-</span>
        <span>
          {recordNumber < maxRecordNumber ? recordNumber : maxRecordNumber}
        </span>
        <span>of</span>
        <span>{maxRecordNumber}</span>
      </Box>
      <button onClick={onFront}>b3</button>
      <Button onClick={onBulkfront} disabled={pageNumber >= maxPageNumber}>
        b4
      </Button>
    </div>
  );
}

Pagination.defaultProps = {
  recordPerPage: 10,
  bulkSkip: 5,
  onPageChange: () => null,
  pageNumber: 1,
  maxRecordNumber: 120,
};

Pagination.propTypes = {
  recordPerPage: PropTypes.number,
  bulkSkip: PropTypes.number,
  onPageChange: PropTypes.func,
  pageNumber: PropTypes.number,
  maxRecordNumber: PropTypes.number,
};
