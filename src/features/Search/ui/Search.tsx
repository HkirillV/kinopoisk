import { FC, useState, ChangeEvent } from "react";
import { RiSearchLine } from "react-icons/ri";
import classNames from "classnames";
import { Input } from "@/shared/ui/Input"

interface ISearch {
  className: string;
  name: string;
  type: string;
  placeholder?: string;
}

import "./Search.scss"

export const Search: FC<ISearch> = (props) => {
  const {
    className,
    name,
    type,
    placeholder
  } = props

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [search, setSearch] = useState<string>("")

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const onSearchIconClick = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
      <form className={classNames(className, "search")}>
        <RiSearchLine className="search__icon" onClick={onSearchIconClick}/>
        <Input
            className={classNames("search__input", isOpen ? "is-active" : "")}
            type={type}
            name={name}
            value={search}
            onChange={onChange}
            placeholder={placeholder}
        />
      </form>
  )
}