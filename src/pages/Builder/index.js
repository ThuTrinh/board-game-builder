import React, { useState } from 'react'

import { Box, Flex } from 'bricks'
import Board from '~/components/Board'
import {
  LayoutControl,
  DimensionControl,
  SizeControl,
  TileSetControl
} from '~/components/Controls'

const Builder = () => {
  const [layout, setLayout] = useState('ODD_Q')
  const [rows, setRows] = useState(9)
  const [columns, setColumns] = useState(13)
  const [size, setSize] = useState(50)
  const [tileSet, setTileSet] = useState(50)

  return (
    <Flex height="100%">
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
      <Box>
        <Board rows={rows} columns={columns} layout={layout} size={size} />
      </Box>
    </Flex>
  )
}

Builder.displayName = 'Builder'
export default Builder
