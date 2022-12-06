import styled from "styled-components";

// images
import userPhoto1 from "../assets/img/userPhoto1.png";
import userPhoto2 from "../assets/img/userPhoto2.png";
import userPhoto3 from "../assets/img/userPhoto3.png";
import userPhoto4 from "../assets/img/userPhoto4.png";
import UserEvents from "./UserEvents";

export default function UsersPhotos() {
  const imgArr: typeof userPhoto1 = [
    userPhoto4,
    userPhoto1,
    userPhoto3,
    userPhoto2,
    userPhoto2,
  ];
  return (
    <StyledUsersPhotos>
      <div className="images__wrapper">
        {imgArr.map((i: typeof userPhoto1, idx: number) => (
          <div
            className={(idx === 1 ? "on " : "") + "current-img"}
            style={{ background: `url(${i}) no-repeat center` }}
          ></div>
        ))}
      </div>

      <UserEvents />
    </StyledUsersPhotos>
  );
}

const StyledUsersPhotos = styled.div`
  .images__wrapper {
    padding-bottom: 100px;
    width: 1250px;
    margin: 0 auto;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;

    .current-img {
      grid-column: span 1;
      grid-row: span 1;
      min-width: 380px;
      min-height: 270px;

      &.on {
        grid-row: span 2;
      }
    }
  }
`;
