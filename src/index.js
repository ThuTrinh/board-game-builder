import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Flex from "./components/Flex";
import Box from "./components/Box";
import Board from "./components/Board";
import {
  LayoutControl,
  DimensionControl,
  SizeControl,
  TileSetControl
} from "./components/Controls";

function App() {
  const [layout, setLayout] = useState("ODD_R");
  const [rows, setRows] = useState(9);
  const [columns, setColumns] = useState(13);
  const [size, setSize] = useState(50);
  const [tileSet, setTileSet] = useState(50);

  return (
    <div className="App">
      <h1>Hex Game Builder</h1>
      <h2>Editor for building a hex game board</h2>

      <Flex>
        <Box p={2}>
          <form>
            <LayoutControl value={layout} setValue={setLayout} my={2} />
            <DimensionControl
              rows={rows}
              setRows={setRows}
              columns={columns}
              setColumns={setColumns}
              my={2}
            />
            <SizeControl size={size} setSize={setSize} my={2} />
            <TileSetControl value={tileSet} setValue={setTileSet} my={2} />
          </form>
        </Box>
        <Board rows={rows} columns={columns} layout={layout} size={size} />
      </Flex>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// https://www.redblobgames.com/grids/hexagons/
