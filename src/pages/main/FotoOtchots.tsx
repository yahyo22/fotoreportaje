import styled from "styled-components";
import { TabTitle } from "../../utils/Utils";

// Components
import Button from "../../components/button/Button";
import Select from "../../components/select/Select";
import Card from "../../components/card/Card";

export default function FotoOtchots() {
  TabTitle("FotoOtchots");
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

  function resetFilter() {}

  return (
    <StyledFotoOtchots>
      <div className="top">
        <h1>Фотоотчеты</h1>
        <div className="filter__wrapper">
          <div className="btn__wrapper">
            <Button type="button" onClick={resetFilter}>
              X
            </Button>
          </div>
          <div className="select__wrapper">
            <Select placeholder="Дата" list={["asf", "Asdfd", "aersdtfy"]} />
          </div>
          <div className="select__wrapper">
            <Select placeholder="Место" list={locationArr} multiple={true} />
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
        <Card />
        <Card />
        <Card />
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
    </StyledFotoOtchots>
  );
}

const StyledFotoOtchots = styled.div`
  margin: 60px 0px 100px;

  .top {
    h1 {
      font-weight: 700;
      font-size: 50px;
      line-height: 61px;
      color: #333;
    }

    .filter__wrapper {
      margin: 60px 0px 40px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 40px;

      .btn__wrapper {
        width: 56px;
      }

      .select__wrapper {
        width: 136px;

        &:last-of-type {
          width: 480px;
        }
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
