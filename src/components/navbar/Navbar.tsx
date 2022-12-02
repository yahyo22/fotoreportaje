import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
// logo
import logo from "../../assets/img/logo2.png";
export default function () {
  const location = useLocation().pathname;
  console.log(location);

  return (
    <StyledNavbar>
      <nav>
        <div>
          <img src={logo} />
        </div>
        <div>
          <ul className="nav-list">
            <li>
              <Link to="">Главная</Link>
            </li>
            <li>
              <Link to="">Заведения</Link>
            </li>
            <li>
              <Link to="">События</Link>
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
          <div className=" icon icon-search"></div>
          <div className="icon icon-profile"></div>
        </div>
      </nav>
    </StyledNavbar>
  );
}
const StyledNavbar = styled.div`
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
        a{
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
        }
        
        a:active{
            color: #ffffff;
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
