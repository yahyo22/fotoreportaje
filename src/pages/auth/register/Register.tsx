import React from 'react'
import { AuthStyle } from '../AuthStyle'

export default function Register() {
  return (
    <AuthStyle>
      <div className="top">
        <h1>Регистрация</h1>
        <div className="icon icon-close"></div>
      </div>
      <form className="form__wrapper"></form>
    </AuthStyle>
  )
}

