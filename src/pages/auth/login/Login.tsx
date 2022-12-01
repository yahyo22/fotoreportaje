import React from "react";
import Button from "../../../components/button/Button";
import styled from "styled-components";
import Input from "../../../components/input/Input";
import Checkboxes from "../../../components/input/Checkbox";
export default function Login() {
  return (
    <StyledLogin>
      <div className="top">
        <h1>Вход в личный кабинет</h1>
        <div className="icon icon-close"></div>
      </div>
      <form action="">
        <Input placeholder="Логин / E-mail / Телефон" type="text" />
        <Input placeholder="Логин / E-mail / Телефон" type="text" />
        <Checkboxes />
        <div className="wrapper-Button">
          <Button type="button">Войти</Button>
          <Button type="button">Зарегистрироваться</Button>
        </div>
        <span>Восстановить пароль</span>
        <span>Войти с помощью соц. сетей</span>
        <div className="social-buuton">
          <Button type="button">Вконтакте</Button>
          <Button type="button">Facebook</Button>
          <Button type="button">Google</Button>
        </div>
      </form>
    </StyledLogin>
  );
}
const StyledLogin = styled.div`
  padding: 0 16px;
  max-width: 899px;
  margin: 0 auto;
  background: #fff;
  margin-bottom: 140px;
  .top {
    margin: 125px 0px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-weight: 700;
      font-size: 50px;
      line-height: 61px;
      color: #333333;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    .wrapper-Button {
      display: flex;
      align-items: center;
      gap: 25px;
    }
    span {
      text-align: center;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #333333;
      margin-bottom: 20px;
      &:last-of-type{
        text-align: start;
        margin-bottom: 0;
      }
    }
    .social-buuton{
      display: flex;
      align-items: center;
      gap: 25px;
    }
  }
`;
