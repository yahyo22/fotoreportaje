import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Images
import cardImg from "../../assets/img/card.png";

export default function Card() {
  const navigate = useNavigate();

  return (
    <StyledCard onClick={() => navigate("/event/karta/fotootchot")}>
      <div className="like__wrapper">
        <i className="icon icon-like"></i>
        <p>33</p>
      </div>
      <div className="art-content">
        <h6 className="">АРТ ПРОСТРАНСТВО</h6>
        <h2>Klumba space</h2>
        <p>Кузнецкий проспект, 55 +7 999 999 9090</p>
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  padding: 20px;
  
  grid-column: span 1;
  grid-column: span 1;
  grid-row: span 1;

  width: 450px;
  height: 450px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 53.65%, #000000 100%),
    url(${cardImg}) no-repeat center;
  background-size: cover;

  .like__wrapper {
    padding: 10px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    width: max-content;
    background: #333;

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

  @media (max-width: 835px) {
  width: 340px;
  height: 340px;
  }

  @media (max-width: 390px) {
  width: 167px;
  height: 167px;
  }
`;
