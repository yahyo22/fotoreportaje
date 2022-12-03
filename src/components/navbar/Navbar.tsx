import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
// logo
import logo2 from "../../assets/img/logo2.png";
import logo from "../../assets/img/logo.png";
export default function ({ props }: any) {
  const location = useLocation().pathname;
  console.log(location);

  return (
    <StyledNavbar props={props}>
      <nav>
        <div>{props ? <img src={logo} /> : <img src={logo2} />}</div>
        <div>
          <ul className="nav-list">
            <li>
              <Link to="/main" className={location === "/main" ? "active" : ""}>
                Главная
              </Link>
            </li>
            <li>
              <Link to="/event/karta">Заведения</Link>
            </li>
            <li>
              <Link
                to="/event"
                className={location === "/event" ? "active" : ""}
              >
                События
              </Link>
            </li>
            <li>
              <Link to="">Фотоотчеты</Link>
            </li>
            <li>
              <Link to="" className={location === "/nav" ? "active" : ""}>
                Заказать фотосъемку
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav_icon">
          {props ? (
            <>
              <div className="icon icon-profileblack"></div>
              <div className=" icon icon-searchblack"></div>
            </>
          ) : (
            <>
              <div className="icon icon-profile"></div>
              <div className=" icon icon-search"></div>
            </>
          )}
        </div>
      </nav>
    </StyledNavbar>
  );
}
const StyledNavbar = styled.div<any>`
  nav {
    padding: 41px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .nav-list {
      display: flex;
      align-items: center;
      gap: 60px;
      li {
        a {
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          color: rgba(255, 255, 255, 0.8);
          cursor: pointer;

          &:active {
            color: #fff;
          }
          ${({ props }) => {
            if (props)
              return css`
                color: #333;

                &:active {
                  color: black;
                }
              `;
          }}
        }

        a.active {
          color: #ffffff;
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;
        }
      }
    }
    .nav_icon {
      display: flex;
      align-items: center;
      gap: 39px;
    }
  }
`;
