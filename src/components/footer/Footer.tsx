import styled from "styled-components";

// logo
import logo from "../../assets/img/logo.png";

export default function Footer() {
  return (
    <StyledFooter>
      <ul className="lists__wrapper">
        <li className="left">
          <img src={logo} alt="logo" />
          <div className="location">
            <p>Кемерово</p>
            <p>Советский проспект 34</p>
            <div className="contact">
              <p>
                <a href="http://Limon.agency@yandex.ru">
                  Limon.agency@yandex.ru
                </a>
              </p>
              <p>
                <a href="tel:+7 999 000 9999">+7 999 000 9999</a>
              </p>
            </div>
          </div>
        </li>
        <li className="center">
          <ul>
            <li>
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Заведения</a>
            </li>
            <li>
              <a href="#">События</a>
            </li>
            <li>
              <a href="#">Фотоотчеты</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Заказать фотосъемку</a>
            </li>
            <li>
              <a href="#">Вакансии</a>
            </li>
            <li>
              <a href="#">Пользовательское соглашение</a>
            </li>
          </ul>
        </li>
        <li className="right">
          <div className="icon twitter"></div>
          <div className="icon instagram"></div>
          <div className="icon facebook"></div>
        </li>
      </ul>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 50px 0 70px;
  border-top: 2px solid #c4c4c4;

  .lists__wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 50px;
    flex-wrap: wrap;

    .left {
      .location,
      .contact {
        margin-top: 30px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 5px;

        p,
        p > a {
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: #242426;
        }
      }

      .contact {
        margin-top: 16px;
        gap: 10px;
      }
    }

    .center {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 80px;

      ul {
        display: flex;
        flex-direction: column;
        gap: 15px;

        li {
          a {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #333;
          }
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: center;  
      gap: 4px;

      & > .icon {
        min-width: 50px;
        min-height: 50px;
        background-color: #333 !important;
      }
    }
  }
`;
