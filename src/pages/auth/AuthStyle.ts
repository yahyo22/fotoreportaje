import styled from "styled-components";

export const AuthStyle = styled.div`
  padding: 125px 16px 170px;
  max-width: 899px;
  margin: 0 auto;
  background: #fff;

  .top {
    margin-bottom: 100px;
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
    }
  }
  .form__wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 640px;
    height: 100%;

    .input__wrapper {
      width: 100%;

      &:last-of-type {
        margin-top: 10px;
      }

      p {
        margin-top: -10px;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #333;
      }
    }
  }
`;
