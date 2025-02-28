import { FC, useState, ChangeEvent } from "react";
import { RiSearchLine } from "react-icons/ri";
import classNames from "classnames";
import { Input } from "@/shared/ui/Input"

interface ISearch {
  className: string;
  name: string;
  type: string;
  disabled?: boolean;
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
    setIsOpen(prevState => {
      const newState:boolean = !prevState
      if (newState) {
        setSearch("")
      }
      return newState
    })
  }

  return (
      <form className={classNames(className, "search")}>
        <RiSearchLine className="search__icon" onClick={onSearchIconClick}/>
        <Input
            className={classNames("search__input", isOpen ? "is-active-search" : "")}
            type={type}
            name={name}
            value={search}
            disabled={!isOpen}
            onChange={onChange}
            placeholder={placeholder}
        />
      </form>
  )
}