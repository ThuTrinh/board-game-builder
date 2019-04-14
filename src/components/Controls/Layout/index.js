import React from "react";

import Box from "../../Box";

const Layout = ({ value, setValue, ...props }) => (
  <Box {...props}>
    <Box>
      <label htmlFor="layout">Layout</label>
    </Box>
    <Box>
      <select
        id="layout"
        onChange={event => setValue(event.target.value)}
        value={value}
      >
        <option value="ODD_R">ODD R</option>
        <option value="EVEN_R">EVEN R</option>
        <option value="ODD_Q">ODD Q</option>
        <option value="EVEN_Q">EVEN Q</option>
      </select>
    </Box>
  </Box>
);

Layout.displayName = "Layout";
export default Layout;
