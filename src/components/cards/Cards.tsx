import { useState } from "react";
import styled from "styled-components";

// Components
import Button from "../button/Button";
import Card from "../card/Card";
import Select from "../select/Select";

export default function Establishment() {
  const [btnFilter, setBtnFilter] = useState<String>("");

  //
  const categoriesArr: Array<string> = [
    "Кафе",
    "Бары",
    "Рестораны",
    "Ночные клубы",
    "Арт пространства",
    "Speak easy bar",
    "Общественные пространства",
  ];
  //
  const sortArr: Array<string> = [
    "Популярное",
    "От А до Я, от A до Z",
    "От Я до А, от Z до A",
  ];

  return (
    <StyledGrid>
      <h1>Заведения</h1>
      <div className="filter__wrapper">
        <div className="filter">
          <Select
            list={categoriesArr}
            placeholder="Поиск по категориям"
            multiple={true}
          />
        </div>
        <div className="filter">
          <Select list={sortArr} placeholder="Сортировка" />
        </div>
        <div className="filter">
          <Button
            type="button"
            filter={true}
            btnFilter={btnFilter}
            onClick={() =>
              btnFilter ? setBtnFilter("") : setBtnFilter("Сейчас открыто")
            }
          >
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
    flex-wrap: wrap;
    gap: 40px;

    .filter {
      width: 450px;

      &:last-of-type {
        width: 210px;
      }
    }
  }

  .arts__wrapper {
    margin: 0 auto;
    margin-top: 40px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 40px;
  }
  
  @media (max-width: 1700px) {
    .arts__wrapper {
      grid-column-gap: 25px;
      grid-row-gap: 25px;
    }
  }

  @media (max-width: 1000px) {
    .arts__wrapper {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 20px;
      grid-row-gap: 20px;
    }
  }
`;
