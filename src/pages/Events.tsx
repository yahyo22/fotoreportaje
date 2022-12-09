import { useState } from "react";
import styled from "styled-components";

// Components
import Card from "../components/card/Card";
import Header from "../components/head/Header";
import Select from "../components/select/Select";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";

import { TabTitle } from "../utils/Utils";

export default function Events() {
  TabTitle("Event");
  const [btnFilter, setBtnFilter] = useState<String>("Платно");

  //
  const locationArr: Array<string> = [
    "Арт пространство клумба",
    "Бар Блокнот",
    "Гриль бар Жара",
    "Бар Cosmo",
    "Speak easy bar Xyka house ",
    "4 Стихии",
    "Marakesh",
  ];

  return (
    <StyledEvent>
      <Header props={false} />
      <div className="container">
        <div className="center">
          <h1>События</h1>
          <div className="filter__wrapper">
            <div className="filter">
              <Select list={[""]} placeholder="Дата" />
            </div>
            <div className="filter">
              <Select
                list={locationArr}
                placeholder="Поиск по местам"
                multiple={true}
              />
            </div>
            <div className="button">
              <div className="first">
                <Button
                  type="button"
                  filter={true}
                  btnFilter={btnFilter}
                  onClick={() => setBtnFilter("Платно")}
                >
                  Платно
                </Button>
              </div>
              <div className="last">
                <Button
                  type="button"
                  filter={true}
                  btnFilter={btnFilter}
                  onClick={() => setBtnFilter("Бесплатно")}
                >
                  Бесплатно
                </Button>
              </div>
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
        </div>
        <Footer />
      </div>
    </StyledEvent>
  );
}

const StyledEvent = styled.div`
  .center {
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

      & > .filter {
        width: 115px;

        &:nth-of-type(2) {
          width: 480px;
        }
      }
      & > .button {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;

        & > .first {
          width: 130px;
          height: 56px;
        }
        & > .last {
          width: 162px;
          height: 56px;
        }
      }
    }
    .arts__wrapper {
      margin-top: 40px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      grid-column-gap: 30px;
      grid-row-gap: 20px;
    }
  }

  @media (max-width: 400px) {
    .center {
      h1 {
        font-size: 24px;
      }

      .filter__wrapper {
        & > .filter {
          width: 100%;
        }
        & > .button {
          & > div {
            width: 100% !important;
          }
        }
      }
    }
  }
`;
