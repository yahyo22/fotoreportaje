import React from 'react'
import Button from '../../../components/button/Button'
import styled from 'styled-components'
import Input from '../../../components/input/Input'
export default function Login() {
  return (
    <StyledLogin>
      <div className="top">
        <h1>Вход в личный кабинет</h1>
        <div className="icon icon-close"></div>
      </div>
      <form action="">
      <Input placeholder='Логин / E-mail / Телефон'type="text"/>
      <Input placeholder='Логин / E-mail / Телефон'type="text"/>
      <Input placeholder='Логин / E-mail / Телефон'type="checkbox"/>
      
      </form>
    </StyledLogin>
  )
}
const StyledLogin = styled.div`
    padding: 0 16px;
  max-width: 899px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid red;
  .top {
    margin: 125px 0px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-weight: 700;
      font-size: 50px;
      line-height: 61px;
      color: #333333;
    }
  }
`