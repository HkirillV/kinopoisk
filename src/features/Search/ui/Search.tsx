import { FC, useState, ChangeEvent } from "react";
import classNames from "classnames";
import { Input } from "@/shared/ui/Input"

interface ISearch {
  className: string;
  name: string;
  type: string;
}

import "./Search.scss"

export const Search: FC<ISearch> = (props) => {
  const {
    className,
    name,
    type
  } = props

  const [search, setSearch] = useState<string>("")

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
      <div className={classNames(className, "search")}>
        <Input
            className="search__input"
            type={type}
            name={name}
            value={search}
            onChange={onChange}
        />
      </div>
  )
}