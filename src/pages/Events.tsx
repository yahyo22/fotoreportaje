import React from "react";
import styled from "styled-components";
import Button from "../components/button/Button";
import Card from "../components/card/Card";
import Establishment from "../components/cards/Cards";
import Footer from "../components/footer/Footer";
import Header from "../components/head/Header";
import Select from "../components/select/Select";
import { TabTitle } from "../utils/Utils";
export default function Events() {
  TabTitle("event");
  return (
    <StyledEvent>
      <Header props={false} />
      <div className="container">
        <div className="center">
          <h1>События</h1>
          <div className="filter__wrapper">
            <div className="filter">
              <Select />
            </div>
            <div className="filter">
              <Select />
            </div>
            <div className="button">
              <div className="first">
                <Button type="button" filter={false}>
                Платно
                </Button>
              </div>
              <div className="last">
                <Button type="button" filter={true}>
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
      gap: 40px;

      &>.filter {
        width: 105px;

        &:nth-of-type(2) {
          width: 480px;
        }
      }
      &>.button {
        display: flex;
        gap: 40px;

        &>.first {
          width: 130px;
          height: 56px;
        }
        &>.last{
            width: 162px;
          height: 56px;
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
  }
`;
