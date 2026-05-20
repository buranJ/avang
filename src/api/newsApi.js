import { apiGet } from "./client";
import { getImageUrl } from "./imageUrl";

function normalizeList(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.results)) return payload.results;
  return [];
}

export function formatApiDate(value) {
  if (!value) return "";
  if (/^\d{2}\.\d{2}\.\d{4}$/.test(value)) return value;

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);

  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function mapNewsItem(item) {
  return {
    slug: item?.slug || "",
    title: item?.title || "Без названия",
    mainImage: getImageUrl(item?.main_image, "/back.jpg"),
    createdAt: formatApiDate(item?.created_at),
  };
}

function mapNewsDetail(item) {
  return {
    slug: item?.slug || "",
    title: item?.title || "Без названия",
    description: item?.description || "",
    youtubeLink: item?.youtube_link || "",
    mainImage: getImageUrl(item?.main_image, "/back.jpg"),
    createdAt: formatApiDate(item?.created_at),
    images: Array.isArray(item?.news_images)
      ? item.news_images.map((image) => getImageUrl(image?.image)).filter(Boolean)
      : [],
  };
}

export async function getNewsList(options = {}) {
  const payload = await apiGet("/news/news/", {
    signal: options.signal,
    query: options.query,
  });

  return normalizeList(payload).map(mapNewsItem).filter((item) => item.slug);
}

export async function getNewsBySlug(slug, options = {}) {
  const payload = await apiGet(`/news/news/${encodeURIComponent(slug)}/`, {
    signal: options.signal,
  });

  return mapNewsDetail(payload);
}

export async function getLinkNews(options = {}) {
  const payload = await apiGet("/news/link-news/", {
    signal: options.signal,
    query: options.query,
  });

  return normalizeList(payload).map((item) => ({
    title: item?.title || "Без названия",
    url: item?.url || "",
    image: getImageUrl(item?.image),
    createdAt: formatApiDate(item?.created_at),
  }));
}
