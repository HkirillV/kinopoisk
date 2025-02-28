import { FC, ChangeEvent, useState } from "react"
import classNames from "classnames"
import { MdOutlineMailLock } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import PersonIcon from '@mui/icons-material/Person';
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";

interface IAuth {
  className: string,
  onClick: () => void,
}

import "./Auth.scss"

export const Auth: FC<IAuth> = (props) => {
  const {
    className,
    onClick
  } = props

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value)
  }

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
      <div className="auth">
        <div>
          <PersonIcon className="auth__icon" onClick={onClick}/>
        </div>
        <form className={classNames(className, "auth-form")}>
          <h3 className="auth__title">Авторизация</h3>
          <label className="auth__label">
            <MdOutlineMailLock className="auth__icon"/>
            <Input
                className="auth__input"
                type="email"
                value={login}
                name="email"
                onChange={onChangeLogin}
                placeholder="email"
            />
          </label>
          <label className="auth__label">
            <RiLockPasswordLine className="auth__icon"/>
            <Input
                className="auth__input"
                type="password"
                value={password}
                name="password"
                onChange={onChangePassword}
                placeholder="password"
            />
          </label>
          <Button className="auth__button" type="submit">Войти</Button>
        </form>
      </div>
  )
}