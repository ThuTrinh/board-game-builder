import React from "react";

import * as R from "ramda";
import Box from "../../Box";
import Flex from "../../Flex";
import { HexTile } from "../../Tiles";

const getTile = R.cond([
  [
    R.equals("MEMOIR_44"),
    R.always([
      { type: "TILE", terrain: "GRASS", bg: "green" },
      { type: "TILE", terrain: "SAND", bg: "yellow" },
      { type: "TILE", terrain: "WATER", bg: "blue" }
    ])
  ],

  [R.T, R.always([])]
]);

const dragTile = R.curry((tile, event) => {
  event.dataTransfer.setData(
    "data",
    JSON.stringify({
      type: "TILE/NEW",
      payload: tile
    })
  );
});

const TileSet = ({ value, setValue, ...props }) => (
  <Box {...props}>
    <Box>
      <label htmlFor="tileSet">Tile Set</label>
    </Box>
    <Box>
      <select
        id="tileSet"
        onChange={event => setValue(event.target.value)}
        value={value}
      >
        <option value="">Select a tile set</option>
        <option value="MEMOIR_44">Memoir 44</option>
      </select>
    </Box>
    <Flex>
      {R.map(
        tile => (
          <HexTile
            draggable={true}
            onDragStart={dragTile(tile)}
            key={tile.terrain}
            width={50}
            height={50}
            row={0}
            col={0}
            bg={tile.bg}
            opacity={1}
            m={2}
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
            >
              <Box>{tile.type}</Box>
            </Flex>
          </HexTile>
        ),
        getTile(value)
      )}
    </Flex>
  </Box>
);

TileSet.displayName = "TileSet";
export default TileSet;
