import React from 'react'

import { Box } from 'bricks'

const Size = ({ size, setSize, ...props }) => (
  <Box {...props}>
    <Box>
      <label htmlFor="size">Size</label>
    </Box>
    <Box>
      <input
        type="number"
        id="size"
        name="size"
        value={size}
        onChange={event => setSize(Number(event.target.value))}
      />
    </Box>
  </Box>
)

Size.displayName = 'Size'
export default Size
