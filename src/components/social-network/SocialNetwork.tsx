import styled from "styled-components";
import { v4 } from "uuid";

export default function SocialNetwork({ socialArr }: any) {
  return (
    <StyledSocial>
      {socialArr.map((i:string) => (
        <div className="icon-div" key={v4()}>
          <i className={"icon " + i}></i>
        </div>
      ))}
    </StyledSocial>
  );
}

const StyledSocial = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 15px;

  .icon-div {
    cursor: pointer;
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
