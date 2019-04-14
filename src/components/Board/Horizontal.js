import React from "react";

import * as R from "ramda";

import Box from "../Box";
import Flex from "../Flex";
import TileSlot from "./TileSlot";

const Horizontal = ({ rows, columns, size, indent }) => {
  const shouldIndent = indent === "even" ? x => x % 2 === 0 : x => x % 2 !== 0;

  return (
    <Flex
      flexDirection="column"
      bg="green"
      py={indent === "even" ? 0 : `${size / 4}px`}
    >
      {R.map(
        row => (
          <Flex
            key={row}
            flexDirection="row"
            ml={shouldIndent(row) ? 0 : `${size / 2 + 1}px`}
            my={shouldIndent(row) ? 0 : `-${size / 4}px`}
          >
            {R.map(
              col => (
                <TileSlot key={col} row={row} col={col} size={size} />
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

Horizontal.displayName = "Horizontal";
export default Horizontal;
