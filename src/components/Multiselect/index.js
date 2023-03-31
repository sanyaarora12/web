import React from "react";
import { useState } from "react";

export default function MultiSelect({ options, onSelection }) {
  const [selected, setSelected] = useState([]);
  const isAllSelected =
    options.length > 0 && selected.length === options.length;

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      onSelection(selected.length === options.length ? [] : options);
      return;
    }
    onSelection(value);
    setSelected(value);
  };
  return (
    <div>
      <div>
        <h6>Service Type</h6>
      </div>
    </div>
  );
}
