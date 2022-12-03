import styled from "styled-components";

// Images
import cardImg from "../../assets/img/card.png";

export default function Card() {
  return (
    <StyledCard>
      <div className="like__wrapper">
        <i className="icon icon-like"></i>
        <p>33</p>
      </div>
      <div className="art-content">
        <h6>АРТ ПРОСТРАНСТВО</h6>
        <h2>Klumba space</h2>
        <p>Кузнецкий проспект, 55 +7 999 999 9090</p>
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  /* width: 450px; */
  height: 450px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 53.65%, #000000 100%),
    url(${cardImg});

  .like__wrapper {
    padding: 10px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    width: max-content;
    background: #333333;

    & > .icon {
      min-width: 16px;
      min-height: 16px;
      background: #fff !important;
    }

    p {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #fff;
    }
  }

  .art-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    max-width: 227px;
    color: #fff;
    font-weight: 500;

    h5 {
      font-size: 15px;
      line-height: 18px;
    }

    h2 {
      font-size: 30px;
      line-height: 37px;
    }

    p {
      margin-top: 5px;
      font-size: 18px !important;
      line-height: 150%;
    }
  }
`;
