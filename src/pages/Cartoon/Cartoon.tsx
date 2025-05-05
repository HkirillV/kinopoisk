import { useEffect } from "react";
import { kinopoiskAPI } from "@/shared/api/kinopoiskAPI";

import "./Cartoon.scss";

export const Cartoon = () => {
  useEffect(() => {
    kinopoiskAPI.getCartoons().then((data) => {});
  }, []);

  return <div className="cartoon"></div>;
};
