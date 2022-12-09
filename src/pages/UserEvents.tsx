import styled from "styled-components";
import Card from "../components/card/Card";

export default function UserEvents() {
  return (
    <StyledUserEvents>
      <div className="cards__wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

    </StyledUserEvents>
  );
}

const StyledUserEvents = styled.div`
  .cards__wrapper {

  }
`;
