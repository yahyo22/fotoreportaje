import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

// Images
import cardImg from "../../assets/img/card.png";

export default function Card() {
  const location = useLocation().pathname;
  const navigate = useNavigate();

  return (
    <StyledCard onClick={() => {location === "/fotoOtchots" ? navigate("/fotoOtchots/kartochka") : navigate("/event/karta/fotootchot")}}>
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
  grid-column: span;
  grid-row: span 1;

  height: 480px;

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

    h6 {
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

  @media (max-width: 1700px) {
    height: 400px;
  }

  @media (max-width: 1700px) {
    height: 370px;
  }

  @media (max-width: 835px) {
    height: 340px;

    .like__wrapper {
      & > .icon {
        min-width: 15px;
        min-height: 15px;
      }

      p {
        line-height: 16px;
        font-size: 15.8275px;
      }
    }

    .art-content {
      max-width: 190px;

      h6 {
        font-size: 12px;
        line-height: 16px;
      }

      h2 {
        font-size: 22px;
        line-height: 22px;
      }

      p {
        margin-top: 0px;
        font-size: 15px !important;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 10px;
    height: 260px;

    .like__wrapper {
      padding: 4px 10px;

      & > .icon {
        min-width: 13px;
        min-height: 13px;
      }

      p {
        line-height: 13px;
        font-size: 10.8275px;
      }
    }

    .art-content {
      h6 {
        font-size: 10px;
        line-height: 13px;
      }

      h2 {
        font-size: 18px;
        line-height: 21px;
      }

      p {
        margin-top: 0px;
        font-size: 14px !important;
      }
    }
  }

  @media (max-width: 500px) {
    height: 200px;

    .like__wrapper {
      padding: 4px 10px;

      & > .icon {
        min-width: 10px;
        min-height: 10px;
      }

      p {
        line-height: 10px;
        font-size: 8px;
      }
    }

    .art-content {
      max-width: 120px;
      gap: 0px;

      h6 {
        font-size: 7px;
        line-height: 10px;
      }

      h2 {
        font-size: 14px;
        line-height: 21px;
      }

      p {
        font-size: 9px !important;
      }
    }
  }

  @media (max-width: 390px) {
    height: 167px;
  }
`;
