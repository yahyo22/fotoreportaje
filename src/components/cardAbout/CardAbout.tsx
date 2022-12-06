import { useState } from "react";
import styled from "styled-components";

// Images
import cardImg from "../../assets/img/card.png";
import fire from "../../assets/img/fire.png";
import Button from "../button/Button";
import Card from "../card/Card";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import SocialNetwork from "../social-network/SocialNetwork";

export default function CardAbout() {
  const [btnFilter, setBtnFilter] = useState<String>("Фотоотчеты");

  return (
    <StyledCardAbout>
      <div className="container">
        <Navbar props={true} />
        <div className="current-photo">
          <div className="card-images__wrapper">
            <div className="image-card"></div>
            <div className="more-images">
              <div className="card-img"></div>
              <div className="card-img"></div>
              <div className="card-img"></div>
            </div>
          </div>
          <div className="card-about__wrapper">
            <div className="likes__wrapper">
              <div className="like">
                <i className="icon icon-like"></i>
                <p>33</p>
              </div>
              <div className="fire">
                <img src={fire} alt="fire" />
              </div>
            </div>
            <div className="content">
              <h6>АРТ ПРОСТРАНСТВО</h6>
              <h1>Klumba space</h1>
              <div className="address">
                <h2>Адрес: </h2>
                <p>Кузнецкий проспект, 55</p>
              </div>
              <div className="working">
                <h2>Режим работы: </h2>
                <p>Кузнецкий проспект, 55</p>
              </div>
              <div className="contacts">
                <h2>Контакты:</h2>
                <p>+7 999 999 9090</p>
                <SocialNetwork
                  socialArr={[
                    "icon-VK",
                    "icon-facebook",
                    "icon-google",
                    "icon-instagram",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="buttons__wrapper">
          <div className="button">
            <Button
              type="button"
              filter={true}
              btnFilter={btnFilter}
              onClick={() => setBtnFilter("Фотоотчеты")}
            >
              Фотоотчеты
            </Button>
          </div>
          <div className="button">
            <Button
              type="button"
              filter={true}
              btnFilter={btnFilter}
              onClick={() => setBtnFilter("События")}
            >
              События
            </Button>
          </div>
        </div>
        <div className="arts__wrapper">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Footer />
      </div>
    </StyledCardAbout>
  );
}

const StyledCardAbout = styled.div`
  .container {
    .current-photo {
      margin: 60px 0px 100px;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 35px;

      .card-images__wrapper {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 35px;

        .image-card {
          width: 600px;
          height: 500px;
          background: url(${cardImg}) no-repeat center;
          background-size: cover;
        }

        .more-images {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto auto auto;
          grid-gap: 35px;
          height: 500px;

          .card-img {
            width: 140px;
            height: 140px;
            background: url(${cardImg}) no-repeat center;
            background-size: cover;
          }
        }
      }

      .card-about__wrapper {
        .likes__wrapper {
          display: flex;
          align-items: center;
          gap: 20px;

          .like {
            max-height: 37px;
            padding: 10px 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 9px;
            background: #333;

            & > .icon {
              min-width: 18px;
              min-height: 18px;
            }

            p {
              font-weight: 500;
              font-size: 18px;
              line-height: 22px;
              color: #fff;
            }
          }

          .fire {
            max-height: 37px;
            padding: 8px 10px;
            background: #333;

            img {
              width: 16px;
              height: 21px;
            }
          }
        }
        .content {
          margin-top: 26px;
          display: flex;
          flex-direction: column;
          gap: 30px;

          h6 {
            font-weight: 500;
            font-size: 15px;
            line-height: 18px;
            color: #333;
          }

          h1 {
            margin-top: -20px;
            font-weight: 700;
            font-size: 50px;
            line-height: 61px;
            color: #333;
          }

          div {
            h2,
            p {
              font-weight: 700;
              font-size: 18px;
              line-height: 150%;
              color: #333;
            }

            p {
              margin-top: 5px;
              font-weight: 500;
            }
          }
        }
      }
    }

    .buttons__wrapper {
      margin-bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 40px;

      .button {
        width: 214px;

        &:last-of-type {
          width: 183px;
        }
      }
    }

    .arts__wrapper {
      margin-bottom: 100px;
      display: grid;
      grid-template-columns: auto auto auto;
      grid-gap: 30px;
    }
  }

  @media (max-width: 830px) {
    .container {
      .current-photo {
        .card-images__wrapper {
          flex-wrap: wrap;
          gap: 25px;

          .more-images {
            grid-template-rows: 1fr;
            grid-template-columns: auto auto auto;
            height: auto;
          }
        }
      }
    }
  }

  @media (max-width: 650px) {
    .container {
      .current-photo {
        .card-images__wrapper {
          width: 100%;

          .image-card {
            width: 100%;
            height: 450px;
          }

          .more-images {
            grid-template-rows: 1fr;
            grid-template-columns: auto auto auto;
            height: auto;
            grid-gap: 20px;

            .card-img {
              width: 130px;
              height: 130px;
            }
          }
        }

        .card-about__wrapper {
          .content {
            h6 {
              font-size: 14px;
              line-height: 17px;
            }

            h1 {
              font-size: 45px;
              line-height: 54px;
            }

            div {
              h2,
              p {
                font-size: 17px;
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 515px) {
    .container {
      .current-photo {
        margin: 20px 0px 60px;

        .card-images__wrapper {
          width: 100%;

          .image-card {
            width: 100%;
            height: 350px;
          }

          .more-images {
            gap: 15px;

            .card-img {
              width: 80px;
              height: 80px;
            }
          }
        }

        .card-about__wrapper {
          .content {
            h6 {
              font-size: 12px;
              line-height: 14px;
            }

            h1 {
              font-size: 35px;
              line-height: 44px;
            }

            div {
              h2,
              p {
                font-size: 15px;
              }
            }
          }
        }
      }
    }
  }
`;
