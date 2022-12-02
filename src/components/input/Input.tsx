import { useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";

// Interface
import { IInput } from "../../interface/interface";

export default function Input({ type, label, placeholder }: IInput) {
  const uuid: string = v4();
  const [inputType, setInputType] = useState<string>(type);

  return (
    <StyledInput>
      {label ? <label htmlFor={uuid}></label> : null}
      <input type={inputType} placeholder={placeholder} id={uuid} />
      {type === "password" ? (
        <i
          className={(inputType === "text" ? "On " : "") + "icon password"}
          onClick={() =>
            inputType === "text"
              ? setInputType("password")
              : setInputType("text")
          }
        >
          <i className="eye"></i>
        </i>
      ) : null}
    </StyledInput>
  );
}

const StyledInput = styled.div`
  position: relative;

  input {
    padding: 17px 15px;
    width: 100%;
    border: none;
    background: #f8f8f8;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #333;
    transition: 200ms;

    &::placeholder {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #333;
    }

    &:hover,
    &:focus {
      outline: 2px solid #333;
    }
  }

  .icon {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 15px;
    min-width: 20px;
    min-height: 16px;
    border-radius: 100%;
    display: grid;
    place-items: center;
    border: 2px solid #333;
    transform: translateY(-50%);
    background: none !important;
    transition: 200ms ease-in-out;
    z-index: 5;

    .eye {
      width: 7px;
      height: 7px;
      background: #333;
      border-radius: 100%;
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 11px;
      top: -1px;
      left: 50%;
      transform: translate(-50%, 0%);
      border-radius: 100%;
      background: #464646;
      transition: 200ms ease-in-out;
      z-index: 1;
    }

    &.On::before {
      width: 7px;
      height: 0px;
    }

    &::after {
      content: "";
      position: absolute;
      top: 3px;
      left: -8px;
      width: 32px;
      height: 4px;
      border-radius: 10px;
      background: #333;
      transform: rotate(45deg);
      z-index: 10;
      transition: 220ms ease-in;
    }

    &.On::after {
      top: -8px;
      left: -3px;
      width: 0px;
    }
  }
`;
