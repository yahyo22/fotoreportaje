import styled from "styled-components";
import { IButton } from "../../interface/interface";
export default function Button({ children, type }: IButton) {
  return <StyledButton type={type}>{children}</StyledButton>;
}
const StyledButton = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 17px 5px;
  border-radius: 0px;
  border: none;
  background: #333333;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  
  &:focus {
    outline: none;
  }
`;
