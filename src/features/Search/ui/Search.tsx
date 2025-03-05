import { FC, useState, ChangeEvent } from "react";
import { RiSearchLine } from "react-icons/ri";
import classNames from "classnames";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";

import "./Search.scss"

interface ISearch {
  className: string;
  name: string;
  type: string;
  disabled?: boolean;
  placeholder?: string;
}

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
      const newState: boolean = !prevState
      if (newState) {
        setSearch("")
      }
      return newState
    })
  }

  return (
      <form className={classNames(className, "search")}>
        <Button className="search__button" onClick={onSearchIconClick}>
          <RiSearchLine className="search__icon"/>
          {
              !isOpen && (
                  <span className="search__title">Поиск</span>
              )
          }
        </Button>
        <label className="search__label">
          <Input
              className={classNames("search__input", isOpen ? "is-active-search" : "")}
              type={type}
              name={name}
              value={search}
              disabled={!isOpen}
              onChange={onChange}
              placeholder={placeholder}
          />
        </label>
      </form>
  )
}