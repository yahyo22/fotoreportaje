import styled from "styled-components";

// Components
import Button from "../button/Button";
import Card from "../card/Card";
import Select from "../select/Select";

export default function Establishment() {
  return (
    <StyledGrid>
      <h1>Заведения</h1>
      <div className="filter__wrapper">
        <div className="filter">
          <Select />
        </div>
        <div className="filter">
          <Select />
        </div>
        <div className="filter">
          <Button type="button" filter={true}>
            Сейчас открыто
          </Button>
        </div>
      </div>
      <div className="arts__wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </StyledGrid>
  );
}

const StyledGrid = styled.div`
  margin: 80px 0px 100px;

  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    color: #333;
  }

  .filter__wrapper {
    margin-top: 50px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 40px;

    .filter {
      width: 450px;

      &:last-of-type {
        width: 210px;
      }
    }
  }

  .arts__wrapper {
    margin-top: 40px;
    display: grid;
    grid-column-gap: 30px;
    grid-row-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
 
  }
`;
  