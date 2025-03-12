import { FC, ChangeEvent } from "react";
import classNames from "classnames";

import "./Input.scss"

interface IInput {
  className: string;
  type: string;
  name: string;
  value: string;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Input: FC<IInput> = (props) => {
  const {
    className,
    type,
    name,
    value,
    onChange,
    disabled,
    placeholder,
  } = props

  return (
    <input
      className={classNames(className, "input")}
      type={type}
      name={name}
      value={value}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}