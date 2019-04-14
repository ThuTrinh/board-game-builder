import styled from "styled-components";

import Tile from "./Tile";

const Hex = styled(Tile)`
  clip-path: ${props =>
    props.vertical
      ? "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
      : "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"};
`;

Hex.displayName = "Hex";

export default Hex;
