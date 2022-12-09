import styled from "styled-components";

// Components
import Establishment from "../../components/cards/Cards";

import { TabTitle } from "../../utils/Utils";

export default function Home() {
  TabTitle("Home");
  return (
    <StyledHome>
      <Establishment />
    </StyledHome>
  );
}

const StyledHome = styled.div``;
