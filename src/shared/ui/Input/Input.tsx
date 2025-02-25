import { FC, ChangeEvent } from "react";
import classNames from "classnames";

interface IInput {
  className: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

import "./Input.scss"

export const Input: FC<IInput> = (props) => {
  const {
    className,
    type,
    name,
    value,
    onChange,
    placeholder,
  } = props

  return (
      <input
          className={classNames(className, "input")}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
      />
  )
}