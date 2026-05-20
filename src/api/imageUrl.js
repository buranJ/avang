import { API_BASE_URL } from "./client";

export function getImageUrl(value, fallback = "") {
  if (!value || typeof value !== "string") return fallback;
  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith("/")) return `${API_BASE_URL}${value}`;
  return `${API_BASE_URL}/${value}`;
}
