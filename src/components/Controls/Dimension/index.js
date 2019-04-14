import React from "react";

import Box from "../../Box";

const Dimension = ({ rows, columns, setRows, setColumns, ...props }) => (
  <Box {...props}>
    <Box>
      <label htmlFor="rows">Rows</label>
    </Box>
    <Box>
      <input
        type="number"
        id="rows"
        name="rows"
        value={rows}
        onChange={event => setRows(Number(event.target.value))}
      />
    </Box>
    <Box>
      <label htmlFor="columns">Columns</label>
    </Box>
    <Box>
      <input
        type="number"
        id="columns"
        name="columns"
        value={columns}
        onChange={event => setColumns(Number(event.target.value))}
      />
    </Box>
  </Box>
);

Dimension.displayName = "Dimension";
export default Dimension;
