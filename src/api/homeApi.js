import { apiGet } from "./client";
import { getImageUrl } from "./imageUrl";

export async function getHomeInfo(options = {}) {
  const payload = await apiGet("/home/home-info", {
    signal: options.signal,
  });

  return {
    banner: getImageUrl(payload?.banner),
    address: Array.isArray(payload?.address) ? payload.address : [],
    firstKey: payload?.first_key || "",
    secondKey: payload?.second_key || "",
    thirdKey: payload?.third_key || "",
    firstValue: Number(payload?.first_value || 0),
    secondValue: Number(payload?.second_value || 0),
    thirdValue: Number(payload?.third_value || 0),
  };
}

export async function getFooterAddresses(options = {}) {
  const payload = await apiGet("/home/footer", {
    signal: options.signal,
  });

  return Array.isArray(payload) ? payload : [];
}
