import { v4 as uuidv4 } from "uuid";

interface IProps {
  name: string;
}

export const addWithIdElement = (elements: IProps[])=> {
  return elements.map((element) => ({
      ...element,
      id: uuidv4()
    }
  ))
}
