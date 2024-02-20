import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function enableScroll(isScrollable: boolean) {
  if (!isScrollable) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "";
}
