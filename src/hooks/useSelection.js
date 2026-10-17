import {useRef, useState} from "react";

export function useSelection(length, initialIndex = 0) {
  const safeStart =
    length === 0 ? 0 : Math.min(Math.max(initialIndex, 0), length - 1);
  const [index, setIndex] = useState(safeStart);
  const tabsRef = useRef([]);

  const select = next => {
    if (!length) return;
    const wrapped = ((next % length) + length) % length;
    setIndex(wrapped);
  };

  const onKeyDown = event => {
    if (!length) return;
    let next = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (index + 1) % length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (index - 1 + length) % length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = length - 1;
    }
    if (next === null) return;
    event.preventDefault();
    setIndex(next);
    const node = tabsRef.current[next];
    if (node) node.focus();
  };

  return {index, select, onKeyDown, tabsRef};
}
