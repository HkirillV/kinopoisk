import { useRef, ChangeEvent } from "react";
import { useOutsideClick } from "@/shared/lib/hooks/useOutsideClick";
import { RiSearchLine } from "react-icons/ri";
import classNames from "classnames";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";

import "./Search.scss";

interface ISearch {
  className: string;
  name: string;
  type: string;
  disabled?: boolean;
  placeholder?: string;
  isOpenSearch: boolean;
  onSearchButtonClick: () => void;
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

export const Search = (props: ISearch) => {
  const {
    className,
    name,
    type,
    placeholder,
    isOpenSearch,
    searchValue,
    setSearchValue,
    onSearchButtonClick,
  } = props;

  const searchRef = useRef(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useOutsideClick(searchRef, onSearchButtonClick, isOpenSearch);

  return (
    <form className={classNames(className, "search")} ref={searchRef}>
      <Button className="search__button" onClick={onSearchButtonClick}>
        <RiSearchLine className="search__icon" />
        {!isOpenSearch && <span className="search__title">Поиск</span>}
      </Button>
      <label className="search__label">
        <Input
          className={classNames(
            "search__input",
            isOpenSearch ? "is-active-search" : "",
          )}
          type={type}
          name={name}
          value={searchValue}
          disabled={!isOpenSearch}
          onChange={onChange}
          placeholder={placeholder}
        />
      </label>
    </form>
  );
};
