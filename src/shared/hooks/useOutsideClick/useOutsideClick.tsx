import { FC } from "react";

interface IUseOutsideClick {
  authRef: boolean;
  onClick: () => void;
  isOpenAuth: boolean;
}

export const useOutsideClick: FC<IUseOutsideClick> = (props) => {
  const {
    authRef,
    onClick,
    isOpenAuth
  } = props

  if(!authRef) {
    onClick()
  }
}