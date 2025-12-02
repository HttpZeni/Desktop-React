import type { DictDec } from "../config/background";

const KEY_BY_INDEX = "bg-by-index";
const KEY_BY_NAME = "bg-by-name";

export function saveBackgrounds(
  byIndex: DictDec,
  byName: DictDec
) {
  localStorage.setItem(KEY_BY_INDEX, JSON.stringify(byIndex));
  localStorage.setItem(KEY_BY_NAME, JSON.stringify(byName));
}

export function loadBackgroundByIndex(): DictDec {
  const raw = localStorage.getItem(KEY_BY_INDEX);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as DictDec;
  } catch {
    return {};
  }
}

export function loadBackgroundByName(): DictDec {
  const raw = localStorage.getItem(KEY_BY_NAME);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as DictDec;
  } catch {
    return {};
  }
}
