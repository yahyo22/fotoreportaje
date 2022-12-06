import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// imges
import Rockstar from "../../assets/img/Rockstar.png";
import Navbar from "../navbar/Navbar";
export default function Header({ props }: any) {
  return (
    <StyledHeader>
      <div className="container">
        <Navbar props={props} />
        <main>
          <p>АРТ ПРОСТРАНСТВО KLUMBA SPACE</p>
          <h1>
            Кавер-бэнд <br /> «В Главных ролях »
          </h1>
          <div className="route">
            <Link to="/event">
              <p>Посмотреть</p>
              <div className="icon icon-strelka"></div>
            </Link>
          </div>
        </main>
      </div>
    </StyledHeader>
  );
}
const StyledHeader = styled.div`
  height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.35) 0%,
      rgba(0, 0, 0, 0.3) 0.01%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url(${Rockstar});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  main {
    height: 76vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center !important;

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #fff;
      margin: 0;
      padding: 0;
    }
    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 50px;
      line-height: 61px;
      color: #fff;
      margin-top: 10px;
      margin-bottom: 30px;
    }

    .route {
      a {
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 15px;

        p {
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
          text-align: right;
          color: #fcf8eb;
          transform: translateY(-2px);
          margin: 0;
          padding: 0;
        }

        border-bottom: 2px solid #fff0;
        transition: 190ms;

        &:hover,
        &:focus {
          outline: none;
          border-bottom: 2px solid #fff;
        }
      }
    }
  }

  @media (max-width: 610px) {
    main {
      p {
        font-size: 16px;
      }

      h1 {
        font-size: 40px;
        line-height: 41px;
      }

      .route {
        a {
          margin-top: 30px;

          p {
            font-size: 18px;
          }
        }
      }
    }
  }

  @media (max-width: 472px) {
    main {
      p {
        font-size: 14px;
      }

      h1 {
        font-size: 30px;
        line-height: 31px;
      }
    }
  }

  @media (max-width: 472px) {
    main {
      p {
        font-size: 10px;
      }

      h1 {
        font-size: 28px;
        line-height: 36px;
      }
    }
  }
`;
