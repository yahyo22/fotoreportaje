import { AuthStyle } from "../../pages/auth/AuthStyle";

// Components
import Button from "../button/Button";
import Input from "../input/Input";

export default function OrderPhotographer() {
  return (
    <AuthStyle>
      <div className="top">
        <h1>Заказать фотографа</h1>
        <i className="icon icon-close"></i>
      </div>
      <form className="form__wrapper">
        <div className="input__wrapper">
          <Input type="text" placeholder="Имя" />
        </div>
        <div className="input__wrapper">
          <Input type="date" placeholder="Дата съемки" />
        </div>
        <div className="input__wrapper">
          <Input type="email" placeholder="E-mail" />
        </div>
        <div className="input__wrapper">
          <Input type="tel" placeholder="Телефон" />
        </div>
        <div className="input__wrapper">
          <Button type="submit">Отправить</Button>
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
