import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";

// Interface
import { ISelect } from "../../interface/interface";

export default function Select({
  list,
  placeholder,
  multiple = false,
}: ISelect) {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [currentValue, setCurrentValue] = useState<String>(placeholder);
  const [currentMultiplValue, setCurrentMultiplValue] = useState<Array<String>>(
    [placeholder]
  );

  function selectClick(i: String) {
    if (multiple) {
      let newList: Array<String> = [];
      if (currentMultiplValue.length > 0) {
        newList = currentMultiplValue.filter((j: String) =>
          placeholder !== j ? true : false
        );
        setCurrentMultiplValue(newList);
        newList = [];
      }
      if (currentMultiplValue.includes(i)) {
        newList = currentMultiplValue.filter((j: String) =>
          i !== j ? true : false
        );
        setCurrentMultiplValue(newList);
      } else {
        setCurrentMultiplValue((p: Array<String>) => [...p, i]);
      }
    } else {
      setCurrentValue(i);
      setIsOpen(false);
    }
  }

  function multipleValues() {
    let newList: String = "";
    currentMultiplValue.map((i: String, idx) => {
      if (currentMultiplValue.length - 1 === idx) {
        newList += i + "";
      } else {
        newList += i + ", ";
      }
    });
    return newList;
  }

  useEffect(() => {
    if (currentMultiplValue.length < 1) {
      setCurrentMultiplValue((p: Array<String>) => [...p, placeholder]);
    }
  }, [currentMultiplValue]);

  return (
    <StyledSelect>
      <button
        type="button"
        className={
          (multiple ? "multiple " : "") + (isOpen ? "On " : "") + "select"
        }
        onClick={() => setIsOpen((p) => !p)}
      >
        <span>{multiple ? multipleValues() : currentValue}</span>
      </button>
      {isOpen ? (
        <div className={(multiple ? "multiple " : "") + "select-modal"}>
          <ul>
            {list.map((i: String) => (
              <li
                key={v4()}
                className={
                  multiple && currentMultiplValue.includes(i) ? "clicked" : ""
                }
              >
                <button type="button" onClick={() => selectClick(i)}>
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

    &.multiple {
      padding: 17px 30px 17px 15px;
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
          color: #333;
          text-align: start;
          transition: 200ms;

          &:hover,
          &:focus {
            outline: none;
            color: #fff;
            background: #333;
          }
        }
      }
    }

    &.multiple {
      ul {
        li {
          & > button {
            color: #3333338d;

            &:hover,
            &:focus {
              outline: none;
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
                outline: none;
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
      background: #f8f8f8;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(51, 51, 51, 0.1);
    }
  }
`;
