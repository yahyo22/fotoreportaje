import React from 'react'
import styled from "styled-components";
import { Link} from "react-router-dom";
export default function MIninavbar() {
  return (
    <StyledMininavbar>
        <div>

        </div>
      <div className="nav-list">
        <ul>
          <li>
            <Link to="/about">Профиль</Link>
          </li>
          <li>
            <Link to="/myimegs">Мои фотографии</Link></li>
          <li>
            <Link to="/myevent">Мои события</Link></li>
          <li>
            <Link to="/feedback">Обратная связь</Link></li>
          <li>
            <Link to="/login">Выйти</Link></li>
        </ul>
      </div>
    </StyledMininavbar>
  )
}
const StyledMininavbar = styled.div`
    .nav-list {
        padding-bottom:15px;
        border-bottom: 2px solid  rgba(51, 51, 51, 0.1);
    ul {
      display: flex;
      gap: 70px;
      align-items: center;
      li {
        a{
        color: #333333;
        font-style: normal;
        font-weight: 500;
        font-size: 21px;
        line-height: 150%;
        }
      }
    }
  }
`