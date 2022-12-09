import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 } from "uuid";

// images
import userPhoto1 from "../../assets/img/userPhoto1.png";
import userPhoto2 from "../../assets/img/userPhoto2.png";
import userPhoto3 from "../../assets/img/userPhoto3.png";
import userPhoto4 from "../../assets/img/userPhoto4.png";

export default function FotoOtchotsCards() {
  const navigate = useNavigate();

  const imgArr: typeof userPhoto1 = [
    userPhoto4,
    userPhoto1,
    userPhoto3,
    userPhoto2,
    userPhoto4,
    userPhoto1,
    userPhoto4,
    userPhoto1,
    userPhoto2,
    userPhoto3,
    userPhoto2,
    userPhoto3,
    userPhoto2,
    userPhoto4,
  ];

  return (
    <StyledFotoOtchotsCards>
      <div className="top">
        <h5>Klumba space</h5>
        <h1>ОПЕН-ЭЙР Школы танцев Salsa Cubana</h1>
        <div className="info__wrapper">
          <div>
            <h4>Дата</h4>
            <p>28 июля 2020</p>
          </div>
          <div>
            <h4>Просмотров</h4>
            <p>115575</p>
          </div>
          <div>
            <h4>Фото</h4>
            <p>130</p>
          </div>
          <div>
            <h4>Фотограф</h4>
            <p>Ivanabramov</p>
          </div>
        </div>
      </div>
      <div className="arts__wrapper">
        {imgArr.map((i: typeof userPhoto1, idx: number) => (
          <div
            key={v4()}
            onClick={() => navigate("/fotoOtchots/kartochka/more")}
            className={(idx === 1 ? "on " : "") + "current-img"}
            style={{ background: `url(${i}) no-repeat center` }}
          ></div>
        ))}
      </div>
    </StyledFotoOtchotsCards>
  );
}

const StyledFotoOtchotsCards = styled.div`
  margin: 60px 0px 100px;

  .top {
    margin-bottom: 80px;
    max-width: 990px;
    text-align: start;

    h5 {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #333;
    }

    h1 {
      margin: 10px 0px 40px;
      font-weight: 700;
      font-size: 50px;
      line-height: 61px;
      color: #333;
    }

    .info__wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 100px;

      & > div {
        min-width: 160px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 5px;

        h4 {
          font-weight: 500;
          font-size: 18px;
          line-height: 150%;
          color: #333;
        }

        p {
          font-weight: 500;
          font-size: 24px;
          line-height: 150%;
          color: #333;
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

    .current-img {
      height: 320px;
      grid-row: span 1;
      grid-column: span 1;

      &.on {
        grid-row: span 2;
        grid-column: span 1;
        height: auto;
      }
    }
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
