// Style
import { AuthStyle } from "../AuthStyle";

// Components
import Input from "../../../components/input/Input";
import Select from "../../../components/select/Select";
import Button from "../../../components/button/Button";

export default function Register() {
  return (
    <AuthStyle>
      <div className="top">
        <h1>Регистрация</h1>
        <div className="icon icon-close"></div>
      </div>
      <form className="form__wrapper">
        <div className="input__wrapper ">
          <Input type="text" placeholder="Имя" />
        </div>
        <div className="input__wrapper">
          <Input type="text" placeholder="Фамилия" />
        </div>
        <div className="input__wrapper">
          <Input type="email" placeholder="E-mail" />
        </div>
        <div className="input__wrapper">
          <Input type="tel" placeholder="Телефон " />
        </div>
        <div className="input__wrapper">
          <Input type="password" placeholder="Пароль" />
        </div>
        <div className="input__wrapper">
          <Input type="password" placeholder="Подтверждение пароля" />
        </div>
        <div className="input__wrapper">
          <Select />
        </div>
        <div className="input__wrapper">
          <Button type="submit">Зарегистрироваться</Button>
        </div>
        <div className="input__wrapper">
          <p>
            «Нажимая на кнопку, вы даете согласие на обработку персональных
            данных и соглашаетесь c политикой конфиденциальности»
          </p>
        </div>
      </form>
    </AuthStyle>
  );
}
