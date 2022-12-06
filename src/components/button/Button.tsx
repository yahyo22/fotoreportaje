import styled from "styled-components";

// Interface
import { IButton } from "../../interface/interface";
<<<<<<< HEAD
export default function Button({ children, type, icon, filter,onClick }: IButton) {
  return (
    <>
      <StyledButton onClick={onClick}
        type={type}
        className={(icon ? "On" : "") + (filter ? " filter" : "")}
      >
        {icon ? <div className={"icon " + icon}></div> : null}
        {children}
      </StyledButton>
    </>
=======

export default function Button({
  children,
  type,
  icon,
  filter,
  btnFilter,
  onClick,
}: IButton) {
  return (
    <StyledButton
      type={type}
      className={
        (btnFilter === children ? "On-filter " : "") +
        (icon ? "On" : "") +
        (filter ? " filter" : "")
      }
      onClick={onClick}
    >
      {icon ? <div className={"icon " + icon}></div> : null}
      {children}
    </StyledButton>
>>>>>>> d87c9e2d1fe7b0dc8cb30e5a32d7a31b4fe2f09e
  );
}
const StyledButton = styled.button`
  position: relative;
  cursor: pointer;
  width: 100%;
  padding: 17px 5px;
  border-radius: 0px;
  border: none;
  background: #333;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #fff;

  &:hover,
  &:focus {
    outline: none;
    color: #333;
    background: #fff;
    outline: 2px solid #333;
  }

  .icon {
    position: absolute;
    left: 21px;
  }

  &.On::before {
    content: "";
    position: absolute;
    top: 0;
    left: 67px;
    width: 1px;
    height: 100%;
    background-color: #4f4f4f;
  }

  &.filter {
    background: #f8f8f8;
    color: #333;

    &:hover,
    &:focus {
      outline: 2px solid #333;
    }

    &.On-filter {
      background: #333;
      color: #fff;

      &:hover,
      &:focus {
        outline: 2px solid #333;
      }
    }
  }
`;
