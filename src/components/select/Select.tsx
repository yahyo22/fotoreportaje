import { useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";

// Interface
import { ISelect } from "../../interface/interface";

export default function Select({ list, placeholder }: ISelect) {
  const uuid: string = v4();
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [currentValue, setCurrentValue] = useState<String>(
    placeholder || "Выбирайте"
  );

  return (
    <StyledSelect>
      <button
        type="button"
        className={(isOpen ? "On " : "") + "select"}
        onClick={() => setIsOpen((p) => !p)}
      >
        <span>{currentValue}</span>
      </button>
      {isOpen ? (
        <div className="select-modal">
          <ul>
            {list.map((i: String) => (
              <li key={uuid} className={currentValue === i ? "clicked" : ""}>
                <button
                  type="button"
                  onClick={() => {
                    setCurrentValue(i);
                    setIsOpen(false);
                  }}
                >
                  {i}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </StyledSelect>
  );
}

const StyledSelect = styled.div`
  position: relative;

  .select {
    padding: 17px 15px;
    position: relative;
    cursor: pointer;
    text-align: start;
    width: 100%;
    border: none;
    background: #f8f8f8;

    &:hover,
    &:focus {
      outline: 2px solid #333;
    }

    span {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #333;
    }
    /* 
    &:before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: none;
      z-index: 1;
    } */

    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-left: 9px solid transparent;
      border-right: 9px solid transparent;
      border-top: 12px solid #333;
      transition: 200ms ease-in-out;
    }

    &.On {
      border-bottom: 1px solid rgba(51, 51, 51, 0.1);

      &:after {
        transform: rotate(-180deg) translateY(50%);
      }
    }
  }

  .select-modal {
    position: absolute;
    transform: translateY(2px);
    width: 100%;
    max-height: 365px;
    overflow-y: auto;
    animation-name: openingModal;
    animation-duration: 200ms;
    transition: 250ms ease-in-out;
    z-index: 50;

    ul {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      li {
        width: 100%;

        & > button {
          cursor: pointer;
          padding: 18px 10px;
          width: 100%;
          border: none;
          background: #f8f8f8;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          color: #3333338d;
          text-align: start;
          transition: 200ms;

          &:hover,
          &:focus {
            color: #fff;
            background: #333;
          }
        }

        &.clicked {
          & > button {
            position: relative;
            color: #333;

            &::before {
              content: "";
              position: absolute;
              top: 50%;
              right: 30px;
              width: 8px;
              height: 14px;
              border-bottom: 1.5px solid #333;
              border-right: 1.5px solid #333;
              transform: translateY(-50%) rotate(45deg);
            }

            &:hover,
            &:focus {
              color: #fff;
              background: #333;

              &::before {
              border-bottom: 1.5px solid #fff;
              border-right: 1.5px solid #fff;
            }
            }
          }
        }
      }
    }

    @keyframes openingModal {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    /* scroll */
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(51, 51, 51, 0.1);
    }
  }
`;
