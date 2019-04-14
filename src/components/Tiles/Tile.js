import React from "react";

import styled from "styled-components";

import Box from "../Box";

const S = {
  Box: styled(Box)`
    && {
      :hover {
        opacity: ${props =>
          props.opacity < 1 ? props.opacity + 0.1 : props.opacity - 0.1};
      }
    }
  `
};

const Tile = ({ row, col, onSelect, ...props }) => {
  return <S.Box {...props} />;
};

Tile.displayName = "Tile";
Tile.defaultProps = {
  bg: "#fff",
  opacity: 0.1
};

export default Tile;
