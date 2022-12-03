import styled from "styled-components";

export default function SocialNetwork() {
  return (
    <StyledSocial>
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
    </StyledSocial>
  );
}

const StyledSocial = styled.div`
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
`;
