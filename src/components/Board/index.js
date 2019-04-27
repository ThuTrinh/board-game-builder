import React from 'react'

import * as R from 'ramda'

import { Flex } from 'bricks'
import Horizontal from './Horizontal'
import Vertical from './Vertical'

const Board = ({ rows, columns, size = 50, layout = 'ODD_R' }) => {
  return (
    <Flex justifyContent="center" alignItems="center" overflow="auto">
      {R.cond([
        [
          R.equals('ODD_R'),
          () => (
            <Horizontal
              rows={rows}
              columns={columns}
              size={size}
              indent="odd"
            />
          )
        ],

        [
          R.equals('EVEN_R'),
          () => (
            <Horizontal
              rows={rows}
              columns={columns}
              size={size}
              indent="even"
            />
          )
        ],

        [
          R.equals('ODD_Q'),
          () => (
            <Vertical rows={columns} columns={rows} size={size} indent="odd" />
          )
        ],

        [
          R.equals('EVEN_Q'),
          () => (
            <Vertical rows={columns} columns={rows} size={size} indent="even" />
          )
        ]
      ])(layout)}
    </Flex>
  )
}

Board.displayName = 'Board'
export default Board
