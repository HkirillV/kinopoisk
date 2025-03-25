import { RefObject, useEffect } from "react";

export const useOutsideClick = (
  elementRef: RefObject<HTMLElement | null>,
  handler: () => void,
  attached: boolean = true
) => {

  useEffect(() => {
    if (!attached) return

    const onClick = (e: MouseEvent) => {
      if (!elementRef.current) return;
      if (e.target instanceof Node && !elementRef.current.contains(e.target)) {
        handler();
      }
    }

    document.addEventListener("mousedown", onClick);

    return () => {
      document.removeEventListener("mousedown", onClick);
    }

  }, [elementRef, handler, attached]);
}