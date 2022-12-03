import React from "react";
import styled from "styled-components";
// imges
import Rockstar from "../../assets/img/Rockstar.png";
import Navbar from "../navbar/Navbar";
export default function Header({props}:any) {
  return (
    <StyledHeader>
      <div className="container">
        <Navbar props={props} />
        <main>
          <p>АРТ ПРОСТРАНСТВО KLUMBA SPACE</p>
          <h1>Кавер-бэнд <br /> «В Главных ролях »</h1>
          <div className="route">
            <p>Посмотреть</p>
            <div className="icon icon-strelka"></div>
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
  main {
    height: 76vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center !important;

    p{
    font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: #FFF;
margin: 0;
padding: 0;
    }
    h1{
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 61px;
color: #FFF;
margin-top: 10px;
margin-bottom: 30px;
    }
    .route {
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
    }
  }
`;
