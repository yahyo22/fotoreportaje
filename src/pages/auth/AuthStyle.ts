import styled from "styled-components";

export const AuthStyle = styled.div`
  padding: 0 16px;
  max-width: 899px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid red;

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
