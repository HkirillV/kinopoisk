import { v4 as uuidv4 } from "uuid";

interface BaseObject {
  genre?: string;
}

interface BaseObjectWithId extends BaseObject  {
  id: string;
}

export const addWithIdElement = <T extends BaseObject >(elements: T[]): BaseObjectWithId[] => {
  return elements.map((element) => ({
      ...element,
      id: uuidv4()
    }
  ))
}
