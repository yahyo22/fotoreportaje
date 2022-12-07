import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Components
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import Checkboxes from "../../../components/input/Checkbox";
import { TabTitle } from "../../../utils/Utils";

export default function Login({ isModal, closeLogin }: any) {
  const navigate = useNavigate();
  TabTitle("Login");
  return (
    <StyledLogin className={isModal ? "modal" : ""}>
      <div className="top">
        <h1 className="text-gray-300">Вход в личный кабинет</h1>
        <div className="icon icon-close" onClick={closeLogin}></div>
      </div>
      <form action="">
        <Input placeholder="Логин / E-mail / Телефон" type="text" />
        <Input placeholder="Пароль" type="password" />
        <Checkboxes />
        <div className="buttons__wrapper">
          <Button type="button" onClick={() => navigate("/main")}>
            Войти
          </Button>
          <Button type="button" onClick={() => navigate("/register")}>
            Зарегистрироваться
          </Button>
        </div>
        <span>Восстановить пароль</span>
        <span>Войти с помощью соц. сетей</span>
        <div className="social-button">
          <Button type="button" icon="icon-VK">
            Вконтакте
          </Button>
          <Button type="button" icon="icon-facebook">
            Facebook
          </Button>
          <Button type="button" icon="icon-google">
            Google
          </Button>
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
      color: #333;
    }

    & > .icon {
      cursor: pointer;
      min-width: 37px;
      min-height: 37px;
      background-color: #000 !important;
      transform: translateY(6px);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .buttons__wrapper {
      display: flex;
      align-items: center;
      gap: 25px;
    }

    span {
      cursor: pointer;
      text-align: center;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #333;
      margin-bottom: 20px;

      &:last-of-type {
        cursor: default;
        text-align: start;
        margin-bottom: 0;
      }
    }

    .social-button {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 25px;
    }
  }

  &.modal {
    position: absolute;
    padding: 70px;
    z-index: 500 !important;

    .top {
      margin: 0px;

      h1 {
        margin: 60px 0px;
      }

      .icon {
        margin-bottom: 200px;
      }
    }
  }

  @media (max-width: 600px) {
    margin-bottom: 100px;

    .top {
      margin: 70px 0px 74px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-size: 40px;
        line-height: 50px;
      }

      & > .icon {
        cursor: pointer;
        min-width: 37px;
        min-height: 37px;
        background-color: #000 !important;
        transform: translateY(6px);
      }
    }

    form {
      .buttons__wrapper {
        flex-wrap: wrap;
      }

      span {
        font-size: 16px;
      }

      .social-button {
        flex-wrap: wrap;
      }
    }
  }

  @media (max-width: 500px) {
    .top {
      h1 {
        max-width: 300px;
        font-size: 28px;
        line-height: 36px;
      }
    }
  }
`;
