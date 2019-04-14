import React from "react";

import * as R from "ramda";

import Box from "../Box";
import Flex from "../Flex";
import TileSlot from "./TileSlot";

const Vertical = ({ columns, size, indent, rows }) => {
  const shouldIndent = indent === "even" ? x => x % 2 === 0 : x => x % 2 !== 0;

  return (
    <Flex
      flexDirection="row"
      bg="green"
      px={indent === "even" ? 0 : `${size / 4}px`}
    >
      {R.map(
        row => (
          <Flex
            key={row}
            flexDirection="column"
            m={shouldIndent(row) ? 0 : `-${size / 4}px`}
            mt={shouldIndent(row) ? 0 : `${size / 2 + 1}px`}
          >
            {R.map(
              col => (
                <TileSlot key={col} row={row} col={col} size={size} vertical />
              ),
              R.range(0, columns)
            )}
          </Flex>
        ),
        R.range(0, rows)
      )}
    </Flex>
  );
};

Vertical.displayName = "Vertical";
export default Vertical;
