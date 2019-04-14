import React from "react";

const TerrainTile = ({ id, row, col, size, bg, ...props }) => (
  <HexTile
    key={id}
    width={size}
    height={size}
    row={row}
    col={col}
    bg={bg}
    opacity={1}
    position="absolute"
    top={0}
    left={0}
    ml="1px"
    mt="1px"
  />
);

TileSlot.displayName = "TileSlot";
export default TileSlot;
