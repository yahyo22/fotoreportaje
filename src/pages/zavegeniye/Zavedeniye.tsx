import React from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "styled-components";
import Kottabola from "../../assets/img/Kottabola.png";
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import Kalendar from "../../components/kalendar/Kalendar";
import SimpleMap from "../../components/map/Map";
export default function Zavedeniye() {
  return (
    <StyledZavedeliye>
      <div className="container">
        <Navbar props={false} />
        <main>
          <div>
            <img src={Kottabola} alt="" />
          </div>
          <div className="right">
            <p>Вечеринки • Концерты</p>
            <h1>
              Испанская группа DVICIO выступит с единственным концертом в
              Кемерово
            </h1>
            <p>28 июля 2020, в 18:00</p>
            <p>Арт пространство “Klumba Space”; пр. Кузнецкий, 55.</p>
            <p>От 1000р. до 5000р.</p>
            <div className="buttons__wrapper">
              <div className="button__wrapper">
                <Button type="button">Купить билет</Button>
              </div>
              <div className="button__wrapper">
                <Button type="button">Поделиться</Button>
              </div>
            </div>
          </div>
        </main>
        <section>
          <div className="event">
            <h1>О событии</h1>
            <p>
              Самая популярная испанская группа впервые посетит Россию с
              единственным концертом в рамках тура DVICIO ON TOUR в поддержку
              нового альбома. 25 марта 2021г. в московском клубе “Известия Hall”
              исполнится мечта российских поклонников группы, число которых
              растет с каждым днем. Участники квинтета с нетерпением ждут этой
              встречи и обещают удивить публику новыми хитами, а также исполнить
              уже полюбившиеся песни, среди которых Enamorate, Paraíso, Qué
              Tienes Tú, Brasilera, 5 Sentidos, Dosis
            </p>
          </div>
          <div className="map">
            <h1>Контакты</h1>
            <div className="contacts__wrapper">
              <SimpleMap />
              <div className="contacts">
                <div className="address">
                  <h2>Адрес: </h2>
                  <p>Кузнецкий проспект, 55</p>
                </div>
                <div className="phone">
                  <h2>Телефон:</h2>
                  <p>+7 999 999 9090</p>
                </div>
                <div className="social">
                  <h2>Соц. сети</h2>
                  <div className="social__wrapper">
                    <div className="icon-div">
                      <i className="icon icon-VK"></i>
                    </div>
                    <div className="icon-div">
                      <i className="icon icon-facebook"></i>
                    </div>
                    <div className="icon-div">
                      <i className="icon icon-google"></i>
                    </div>
                    <div className="icon-div">
                      <i className="icon icon-instagram"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </StyledZavedeliye>
  );
}
const StyledZavedeliye = styled.div`
  main {
    display: flex;
    align-items: flex-start;
    gap: 35px;

    img {
      width: 700px;
      height: 460px;
    }
    .right {
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 17px;
        margin-bottom: 15px;
        color: #333333;
        &:first-of-type {
          font-size: 14px;
          margin-bottom: 10px;
        }
      }
      h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 130%;
        color: #000000;
        margin-bottom: 40px;
      }

      .buttons__wrapper {
        margin-top: 40px;
        display: flex;
        align-items: center;
        gap: 20px;

        .button__wrapper {
          width: 230px;
        }
      }
    }
  }

  section {
    margin-bottom: 100px;

    .event {
      h1 {
        margin-top: 50px;
        margin-bottom: 10px;
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: left;
      }
      p {
        font-size: 18px;
        font-weight: 500;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 50px;
      }
    }
    .map {
      h1 {
        margin-bottom: 20px;
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: left;
        color: #000000;
      }

      .contacts__wrapper {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 35px;

        .contacts {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 40px;

          & > div {
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

            .social__wrapper {
              margin-top: 15px;
              display: flex;
              align-items: center;
              gap: 18px;

              .icon-div {
                width: 46px;
                height: 46px;
                display: grid;
                place-items: center;
                background: #333;

                & > .icon {
                  background: #fff !important;
                }
              }
            }
          }
        }
      }
    }
  }
`;
