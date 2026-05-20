import { apiGet } from "./client";
import { getImageUrl } from "./imageUrl";

function normalizeList(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.results)) return payload.results;
  return [];
}

function mapObjectListItem(item) {
  return {
    slug: item?.slug || "",
    title: item?.title || "Без названия",
    imagePng: getImageUrl(item?.imagepng),
    imageBg: getImageUrl(item?.imagebg || item?.banner_img, "/back.jpg"),
    miniTitle: item?.mini_title || "",
    miniDescription: item?.mini_description || item?.info?.description || "",
    isNew: Boolean(item?.is_new),
    info: item?.info || null,
  };
}

export async function getActiveObjects(options = {}) {
  const payload = await apiGet("/objects/list/", {
    signal: options.signal,
  });

  return normalizeList(payload).map(mapObjectListItem).filter((item) => item.slug);
}

export async function getEndedObjects(options = {}) {
  const payload = await apiGet("/objects/list/ended/", {
    signal: options.signal,
    query: {
      category_id: options.categoryId,
      limit: options.limit,
      page: options.page,
    },
  });

  return normalizeList(payload).map(mapObjectListItem).filter((item) => item.slug);
}

export async function getObjectBySlug(slug, options = {}) {
  return apiGet(`/objects/detail/${encodeURIComponent(slug)}/`, {
    signal: options.signal,
  });
}

export async function getEndedObjectBySlug(slug, options = {}) {
  return apiGet(`/objects/detail/ended/${encodeURIComponent(slug)}/`, {
    signal: options.signal,
  });
}

export async function getConstructionProgress(buildingId, options = {}) {
  const payload = await apiGet(`/objects/construction-progress/${buildingId}/`, {
    signal: options.signal,
  });

  return Array.isArray(payload) ? payload : [];
}
