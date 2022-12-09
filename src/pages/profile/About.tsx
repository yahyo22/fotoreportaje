import React, { useState } from "react";
import Input from "../../components/input/Input";
import Navbar from "../../components/navbar/Navbar";
import styled from "styled-components";
import MIninavbar from "../../components/navbar/MIninavbar";
export default function About() {
  const [img, setImg] = useState<string>("");
  return (
    <StyledAbout>
      <div className="container">
        <div>
          <Navbar props={true} />
        </div>
        <div className="nav-lists">
          <MIninavbar />
        </div>
        <div className="wrapper">
          <section className="foto">
            <img src={img ? img : ""} alt="" />
            <div>
            <Input
              type="file"
              onChange={(e: any) =>
                setImg(URL.createObjectURL(e.target.files[0]))
              }
            />
            </div>
          </section>
          <section className="left">
            <div>
              <Input type="text" label="Имя:" placeholder="Матвей" />
            </div>
            <div>
              <Input type="text" label="Пол:" placeholder="Мужской" />
            </div>
            <div>
              <Input
                type="text"
                label="Телефон:"
                placeholder="+7 (999) 999 9090"
              />
            </div>
            <div>
              <Input type="password" label="Пароль:" placeholder="" />
            </div>
          </section>
          <section className="right">
            <div>
              <Input type="text" label="Фамилия:" placeholder="Куликов" />
            </div>
            <div>
              <Input
                type="text"
                label="Дата рождения:"
                placeholder="23 октября 1996"
              />
            </div>
            <div>
              <Input
                type="email"
                label="E-mail:"
                placeholder="matt.kulikov@limon.production"
              />
            </div>
          </section>
        </div>
      </div>
    </StyledAbout>
  );
}
const StyledAbout = styled.div`
  .nav-lists {
    margin-bottom: 60px;
  }
  .wrapper {
    display: flex;
    align-items: flex-start;
    gap: 35px;
    .foto{
        border: 1px solid black;
        position: relative;
      img {
        overflow: hidden;
        max-width: 450px;
        max-height: 450px;
      }
      div{
        opacity: 0;
        top: 0;
         position:absolute;
        }

    }
    .left {
      display: flex;
      flex-direction: column;
      gap: 35px;
      div {
        width: 400px;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      gap: 35px;
      div {
        width: 400px;
      }
    }
  }
`;
