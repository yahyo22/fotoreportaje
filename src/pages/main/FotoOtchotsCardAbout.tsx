import { v4 } from "uuid";
import styled, { css } from "styled-components";

// Components
import Button from "../../components/button/Button";

// images
import userPhoto1 from "../../assets/img/userPhoto1.png";
import userPhoto2 from "../../assets/img/userPhoto2.png";
import userPhoto3 from "../../assets/img/userPhoto3.png";
import userPhoto4 from "../../assets/img/userPhoto4.png";
import { useState } from "react";

export default function FotoOtchotsCardAbout() {
  const imgArr: Array<typeof userPhoto1> = [
    userPhoto2,
    userPhoto3,
    userPhoto2,
    userPhoto4,
  ];
  //
  const [currImg, setCurrImg] = useState([userPhoto2, 0]);

  function sliderImg(sliderType: string) {
    if (sliderType === "right") {
      console.log(currImg[1]);

      imgArr.length - 1 > currImg[1]
        ? setCurrImg([imgArr[currImg[1] + 1], currImg[1] + 1])
        : setCurrImg([currImg[0], 0]);
    } else {
      console.log(currImg[1]);

      imgArr.length - 1 > currImg[1]
        ? setCurrImg([imgArr[currImg[1] - 1], currImg[1] - 1])
        : setCurrImg([currImg[0], imgArr.length + 1]);
    }
  }

  return (
    <StyledFotoOtchotsCardAbout currImg={currImg}>
      <div className="top">
        <h5>Klumba space</h5>
        <h1>ОПЕН-ЭЙР Школы танцев Salsa Cubana</h1>
        <div className="info__wrapper">
          <div>
            <h4>Дата</h4>
            <p>28 июля 2020</p>
          </div>
          <div>
            <h4>Просмотров</h4>
            <p>115575</p>
          </div>
          <div>
            <h4>Фото</h4>
            <p>130</p>
          </div>
          <div>
            <h4>Фотограф</h4>
            <p>Ivanabramov</p>
          </div>
        </div>
      </div>
      <div className="carrousel__wrapper">
        <div className="current_image__wrapper">
          <div className="image">
            <div
              className="slider__wrapper"
              onClick={() => sliderImg("left")}
            ></div>
            <div
              className="slider__wrapper"
              onClick={() => sliderImg("right")}
            ></div>
          </div>
          <div className="buttons__wrapper">
            <div className="button">
              <a href={currImg[0]} download>
                <Button type="button">Скачать</Button>
              </a>
            </div>
            <div className="button">
              <Button type="button">Поделиться</Button>
            </div>
          </div>
        </div>
        <div className="more_images__wrapper">
          {imgArr.map((i: typeof userPhoto1, idx: number) => (
            <img
              key={v4()}
              src={i}
              alt={"photo-" + idx}
              onClick={() => setCurrImg([i, idx])}
            />
          ))}
        </div>
      </div>
    </StyledFotoOtchotsCardAbout>
  );
}

const StyledFotoOtchotsCardAbout = styled.div<typeof userPhoto4>`
  margin: 60px 0px 100px;

  .top {
    margin-bottom: 80px;
    max-width: 990px;
    text-align: start;

    h5 {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #333;
    }

    h1 {
      margin: 10px 0px 40px;
      font-weight: 700;
      font-size: 50px;
      line-height: 61px;
      color: #333;
    }

    .info__wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 100px;

      & > div {
        min-width: 160px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 5px;

        h4 {
          font-weight: 500;
          font-size: 18px;
          line-height: 150%;
          color: #333;
        }

        p {
          font-weight: 500;
          font-size: 24px;
          line-height: 150%;
          color: #333;
        }
      }
    }
  }

  .carrousel__wrapper {
    .current_image__wrapper {
      .image {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 900px;
        ${({ currImg }) => css`
          background: url(${currImg[0]}) no-repeat center;
        `}
        background-size: cover;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            #000000 0%,
            rgba(0, 0, 0, 0) 10.42%,
            rgba(0, 0, 0, 0) 90.01%,
            #000000 100%
          );
          opacity: 0;
          transition: 300ms;
        }

        .slider__wrapper {
          cursor: pointer;
          position: relative;
          width: 100px;
          height: 100%;
          z-index: 50;
          background: none;

          &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            width: 46px;
            height: 46px;
            border-bottom: 5px solid #fff;
            border-right: 5px solid #fff;
            opacity: 0;
            transition: 250ms;
          }

          &:first-of-type::before {
            transform: translate(-50%, -50%) rotate(135deg);
          }
        }

        &:hover {
          &::before {
            opacity: 1;
          }

          .slider__wrapper {
            cursor: pointer;
            position: relative;
            width: 100px;
            height: 100%;
            z-index: 50;
            background: none;

            &::before {
              opacity: 0.4;
            }

            &:hover::before {
              opacity: 1;
            }
          }
        }
      }
      .buttons__wrapper {
        margin-top: 40px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;

        .button {
          width: 230px;
        }
      }
    }

    .more_images__wrapper {
      margin-top: 90px;
      padding-bottom: 30px;
      max-width: 100%;
      overflow-x: scroll;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;

      img {
        width: 481px;
        height: 320px;
      }

      /* ==========SCROLLBAR======== */
      /* width */
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 38px;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #333;
        border-radius: 38px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #505050;
      }
    }
  }
`;
