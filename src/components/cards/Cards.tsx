import { useState } from "react";
import styled from "styled-components";

// Components
import Button from "../button/Button";
import Card from "../card/Card";
import Select from "../select/Select";

export default function Establishment() {
  const [btnSelectValue, setBtnSelectValue] = useState<string>("");

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
          <Select list={categoriesArr} placeholder="Поиск по категориям" />
        </div>
        <div className="filter">
          <Select list={sortArr} placeholder="Сортировка" />
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
    margin-top: 40px;
    /* display: grid;
    grid-column-gap: 30px;
    grid-row-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr; */
    display: flex;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
  }
`;
