import { Link } from "react-router-dom";
import styled from "styled-components";

// logo
import logo from "../../assets/img/logo.png";
import SocialNetwork from "../social-network/SocialNetwork";

export default function Footer() {
  return (
    <StyledFooter>
      <ul className="lists__wrapper">
        <li className="left">
          <Link to="/main">
            <img src={logo} alt="logo" />
          </Link>
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
              <Link to="/main">Главная</Link>
            </li>
            <li>
              <Link to="/event/karta">Заведения</Link>
            </li>
            <li>
              <Link to="/event">События</Link>
            </li>
            <li>
              <Link to="/event/karta/fotootchot">Фотоотчеты</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/orderPhotographer">Заказать фотосъемку</Link>
            </li>
            <li>
              <Link to="#">Вакансии</Link>
            </li>
            <li>
              <Link to="#">Пользовательское соглашение</Link>
            </li>
          </ul>
        </li>
        <li className="right">
          <SocialNetwork
            socialArr={["icon-VK", "icon-facebook", "icon-google"]}
          />
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
      margin-top: -15px;
    }
  }
`;
