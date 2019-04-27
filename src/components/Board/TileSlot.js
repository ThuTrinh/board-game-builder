import React, { useReducer } from 'react'

import * as R from 'ramda'
import uuid from 'uuid'

import { Box, Flex } from 'bricks'
import { HexTile } from '../Tiles'

const allowDrop = event => event.preventDefault()

const drop = R.curry((dispatch, event) => {
  event.preventDefault()
  var droppedData = event.dataTransfer.getData('data')

  if (!droppedData) {
    return
  }

  dispatch(JSON.parse(droppedData))
})

const reducer = (state, { payload, type }) => {
  switch (type) {
    case 'TILE/NEW':
      return {
        ...state,
        layers: [...state.layers, { ...payload, id: uuid() }]
      }
    default: {
      return state
    }
  }
}

const BaseTile = ({ row, col, size, vertical }) => (
  <HexTile
    width={size}
    height={size}
    m="1px"
    row={row}
    col={col}
    vertical={vertical}
  >
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <Box>
        {row},{col}
      </Box>
    </Flex>
  </HexTile>
)

const TerrainTile = ({ id, row, col, size, bg, vertical }) => (
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
    vertical={vertical}
  />
)

const TileSlot = ({ row, col, size, vertical, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { row, col, layers: [] })

  return (
    <Box
      position="relative"
      onDrop={drop(dispatch)}
      onDragOver={allowDrop}
      {...props}
    >
      <BaseTile
        size={size}
        row={state.row}
        col={state.col}
        vertical={vertical}
      />
      {R.map(
        R.cond([
          [
            R.propEq('type', 'TILE'),
            ({ id, bg }) => (
              <TerrainTile
                key={id}
                size={size}
                row={state.row}
                col={state.col}
                bg={bg}
                vertical={vertical}
              />
            )
          ],

          [R.T, R.always(null)]
        ]),
        state.layers
      )}
    </Box>
  )
}

TileSlot.displayName = 'TileSlot'
export default TileSlot

// https://www.inkling.com/blog/2013/10/html5s-drag-and-drop-problem/
