import styled from "styled-components";
import { IButton } from "../../interface/interface";
export default function Button({ children, type ,icon }: IButton) {


  return (
  <>
  <StyledButton type={type} className={icon ? 
  'On':""}>
    {icon ?<div className={"icon " + icon}></div>: null}
    {children}</StyledButton>
  </>
  )
}
const StyledButton = styled.button`
position: relative;
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
  &::before{

  }
  &:focus {
    outline: none;
  }

  .icon {
    position: absolute;
    left: 21px;
  }

  &.On::before{
    content: "";
    position: absolute;
    top: 0;
    left: 67px;
    width: 1px;
    height: 100%;
    background-color: #4F4F4F;
  }
`;
