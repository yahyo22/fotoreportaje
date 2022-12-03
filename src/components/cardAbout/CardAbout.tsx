import styled from "styled-components";

// Images
import cardImg from "../../assets/img/card.png";

export default function CardAbout() {
  return (
    <StyledCardAbout>
      <div className="card-images__wrapper">
        <div className="image-card"></div>
        <div className="more-images">
          <div className="card-img"></div>
          <div className="card-img"></div>
          <div className="card-img"></div>
        </div>
      </div>
      <div className="card-about__wrapper">
        <div className="likes__wrapper">
          <div className="like"></div>
          <div className="fire"></div>
        </div>
        <div className="content">
          <h6>АРТ ПРОСТРАНСТВО</h6>
          <h1>Klumba space</h1>
          <div className="address">
            <h2>Адрес: </h2>
            <p>Кузнецкий проспект, 55</p>
          </div>
          <div className="working">
            <h2>Режим работы: </h2>
            <p>Кузнецкий проспект, 55</p>
          </div>
        </div>
      </div>
    </StyledCardAbout>
  );
}

const StyledCardAbout = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 35px;

  .card-images__wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 35px;

    .image-card {
      width: 740px;
      height: 600px;
      background: url(${cardImg}), no-repeat center;
      background-size: cover;
    }

    .more-images {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;
      grid-gap: 35px;
      height: 620px;

      .card-img {
        width: 160px;
        height: 160px;
        background: url(${cardImg}), no-repeat center;
        background-size: cover;
      }
    }
  }

  .card-about__wrapper {
  }
`;
