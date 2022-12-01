import styled from "styled-components";
import { v4 } from "uuid";

// Interface
import { IInput } from "../../interface/interface";

export default function Input({ type, label, placeholder }: IInput) {
  const uuid: string = v4();
  return (
    <StyledInput>
      {label ? <label htmlFor={uuid}></label> : null}
      <input type={type} placeholder={placeholder} id={uuid} />
    </StyledInput>
  );
}

const StyledInput = styled.div`
  input {
    padding: 17px 15px;
    border: none;
    background: #f8f8f8;

    &::placeholder {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #333;
    }

    &:hover,
    &:focus {
      outline: 1px solid #333;
    }
  }
`;
