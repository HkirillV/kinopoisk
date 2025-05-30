import { ChangeEvent, useState, useRef } from "react";
import classNames from "classnames";
import { MdOutlineMailLock } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useOutsideClick } from "@/shared/lib/hooks/useOutsideClick";
import PersonIcon from "@mui/icons-material/Person";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";

import "./Auth.scss";

interface IAuth {
  className: string;
  isOpenAuth: boolean;
  onAuthButtonClick: () => void;
}

export const Auth = (props: IAuth) => {
  const { className, isOpenAuth, onAuthButtonClick } = props;

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const authRef = useRef(null);

  useOutsideClick(authRef, onAuthButtonClick, isOpenAuth);

  const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="auth" ref={authRef}>
      <Button
        className={classNames("auth__button", className)}
        onClick={onAuthButtonClick}
      >
        <PersonIcon className="auth__icon" />
        Войти
      </Button>
      {isOpenAuth && (
        <form className="auth-form">
          <h3 className="auth-form__title">Авторизация</h3>
          <label className="auth-form__label">
            <MdOutlineMailLock className="auth-form__icon" />
            <Input
              className="auth-form__input"
              type="email"
              value={login}
              name="email"
              onChange={onChangeLogin}
              placeholder="email"
            />
          </label>
          <label className="auth-form__label">
            <RiLockPasswordLine className="auth-form__icon" />
            <Input
              className="auth-form__input"
              type="password"
              value={password}
              name="password"
              onChange={onChangePassword}
              placeholder="password"
            />
          </label>
          <Button className="auth-form__button" type="submit">
            Войти
          </Button>
        </form>
      )}
    </div>
  );
};
