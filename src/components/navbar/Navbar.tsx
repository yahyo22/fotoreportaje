import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

// logo
import logo2 from "../../assets/img/logo2.png";
import logo from "../../assets/img/logo.png";
import mobileLogo from "../../assets/img/mobileLogo.png";
import Login from "../../pages/auth/login/Login";

export default function ({ props }: any) {
  const location = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StyledNavbar props={props}>
      <nav>
        <div className="logo-brand">
          <Link to="/main">
            <div className="mobile-logo__wrapper"></div>
            {props ? (
              <img src={logo} alt="brand-logo" />
            ) : (
              <img src={logo2} alt="brand-logo" />
            )}
          </Link>
        </div>
        <div className={(isOpen ? "On " : "") + "nav-modal__wrapper"}></div>
        <ul className={(isOpen ? "On " : "") + "nav-list"}>
          <li>
            <Link to="/main" className={location === "/main" ? "active" : ""}>
              Главная
            </Link>
          </li>
          <li>
            <Link to="/event/karta">Заведения</Link>
          </li>
          <li>
            <Link to="/event" className={location === "/event" ? "active" : ""}>
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
        <div className={(isOpen ? "On " : "") + "nav_icon"}>
          {props ? (
            <>
              <div className=" icon icon-searchblack"></div>
              <div className="icon icon-profileblack"></div>
            </>
          ) : (
            <>
              <div
                className=" icon icon-search"
                onClick={() => setIsModalOpen(true)}
              ></div>
              <div
                className="icon icon-profile"
                onClick={() => setIsModalOpen(true)}
              ></div>
            </>
          )}
        </div>
        <div
          className={(isOpen ? "On " : "") + "nav-modal-icon"}
          onClick={() => setIsOpen((p) => !p)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {isModalOpen && (
        <div className="login_modal__wrapper">
          <Login isModal={true} closeLogin={() => setIsModalOpen(false)}/>
        </div>
      )}
    </StyledNavbar>
  );
}
const StyledNavbar = styled.div<any>`
  nav {
    padding: 41px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-brand {
      a {
        .mobile-logo__wrapper {
          display: none;
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

    .nav-list {
      display: flex;
      align-items: center;
      gap: 60px;
      transition: 0ms;

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

          border-bottom: 2px solid #fff0;
          transition: 190ms;

          &:hover,
          &:focus {
            outline: none;
            border-bottom: 2px solid #fff;
          }
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

      .icon {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1200px) {
    position: relative;

    nav {
      padding: 41px 0px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      .nav-modal-icon {
        margin-top: 20px;
        cursor: pointer;
        position: relative;
        width: 26px;
        height: 17px;
        z-index: 20;

        span {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 24px;
          height: 2px;
          background: #fff;
          ${({ props }) => {
            if (props)
              return css`
                background: #000;
              `;
          }}
          transition: 200ms;

          &:nth-of-type(2) {
            top: 6px;
          }

          &:nth-of-type(3) {
            top: 12px;
          }
        }

        &.On {
          span {
            top: 12px;
            transform: rotate(-45deg);
            ${({ props }) => {
              if (props)
                return css`
                  background: #fff;
                `;
            }}

            &:nth-of-type(2) {
              opacity: 0;
            }

            &:nth-of-type(3) {
              top: 12px;
              transform: rotate(45deg);
            }
          }
        }
      }

      .nav-modal__wrapper {
        display: none;

        &.On {
          display: block;
          position: absolute;
          top: 0px;
          right: -16px;
          width: 500px;
          height: 100vh;
          background: #333;
          animation-name: navAnimate;
          animation-duration: 200ms;
          z-index: 10;
        }
      }

      .nav-list {
        display: none;
        animation-name: navAnimate;
        animation-duration: 400ms;

        &.On {
          display: flex;
          position: absolute;
          top: 130px;
          right: 115px;
          flex-direction: column;
          z-index: 12;
        }

        ${({ props }) => {
          if (props)
            return css`
              li {
                a {
                  color: #fff;
                }
              }
            `;
        }}
      }

      .nav_icon {
        position: absolute;
        top: 40px;
        right: 64px;
        margin-top: 12px;

        .icon {
          width: 26px;
          height: 27px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    position: relative;

    nav {
      padding: 41px 0px;

      .nav-modal__wrapper {
        &.On {
          top: 0px;
          right: -16px;
          width: 100vw;
        }
      }

      .nav-list {
        &.On {
          width: max-content;
          top: 140px;
          right: 50%;
          transform: translateX(50%);
        }
      }

      .nav_icon {
        display: none;
        animation-name: navAnimate;
        animation-duration: 400ms;

        ${({ props }) => {
          if (props)
            return css`
              .icon {
                background: #fff !important;
              }
            `;
        }}

        &.On {
          display: flex;
          position: absolute;
          gap: 60px;
          top: 560px;
          right: 50%;
          transform: translateX(50%);
          z-index: 12;
        }
      }
    }
  }

  @media (max-width: 400px) {
    nav {
      .logo-brand {
        margin: 10px 0px 0px 10px;

        & > a {
          .mobile-logo__wrapper {
            display: block;
            width: 30px;
            height: 33px;
            background: url(${mobileLogo}), no-repeat center;
            background-size: cover;
          }

          & > img {
            display: none;
          }
        }
      }
    }
  }

  .login_modal__wrapper {
    margin: 0 auto;
    max-width: 800px;
    margin-top: -100px;
    overflow-y: hidden;

    &::after {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #272727a9;
      z-index: 10;
    }
  }

  @keyframes navAnimate {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
