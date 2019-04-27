import styled from "styled-components";
import {
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  alignContent,
  justifyItems,
  justifySelf,
  alignSelf,
  order,
  flexBasis
} from "styled-system";

import Box from "../Box";

const Flex = styled(Box)`
  display: flex;
  ${alignItems};
  ${justifyContent};
  ${flexWrap};
  ${flexDirection};
  ${alignContent};
  ${justifyItems};
  ${justifySelf};
  ${alignSelf};
  ${order};
  ${flexBasis};
`;

// prop types can also be added from the style functions
Flex.propTypes = {
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignContent.propTypes,
  ...justifyItems.propTypes,
  ...justifySelf.propTypes,
  ...alignSelf.propTypes,
  ...order.propTypes,
  ...flexBasis.propTypes
};

Flex.displayName = "Flex";

export default Flex;
