import styled from "styled-components";
import {
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius,
  color,
  space,
  width,
  height,
  opacity,
  overflow,
  position,
  zIndex,
  top,
  right,
  bottom,
  left
} from "styled-system";

const interactive = props =>
  props.interactive ? ":hover { cursor: pointer; }" : null;

const Box = styled.div`
  box-sizing: border-box;
  ${border};
  ${borderTop};
  ${borderRight};
  ${borderBottom};
  ${borderLeft};
  ${borderWidth};
  ${borderStyle};
  ${borderColor};
  ${borderRadius};
  ${space};
  ${width};
  ${height};
  ${color};
  ${opacity};
  ${overflow};
  ${interactive};
  ${position};
  ${zIndex};
  ${top};
  ${right};
  ${bottom};
  ${left};
`;

// prop types can also be added from the style functions
Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...color.propTypes,
  ...border.propTypes,
  ...borderTop.propTypes,
  ...borderRight.propTypes,
  ...borderBottom.propTypes,
  ...borderLeft.propTypes,
  ...borderWidth.propTypes,
  ...borderStyle.propTypes,
  ...borderRadius.propTypes
};

Box.displayName = "Box";

export default Box;
