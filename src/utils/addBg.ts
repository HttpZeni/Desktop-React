import type { DictDec } from "../config/background";
import { saveBackgrounds } from "./handelLocalStorage";

export function addBackground(
  name: string,
  url: string,
  byIndex: DictDec,
  byName: DictDec
) {
  const nextIndex = String(Object.keys(byIndex).length + 1);

  const newByIndex: DictDec = {
    ...byIndex,
    [nextIndex]: name,
  };

  const newByName: DictDec = {
    ...byName,
    [name]: url,
  };

  saveBackgrounds(newByIndex, newByName);

  return { newByIndex, newByName };
}
