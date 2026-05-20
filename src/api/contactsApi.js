import { apiGet } from "./client";

export async function getContactInfo(options = {}) {
  const payload = await apiGet("/contact/contact-info/", {
    signal: options.signal,
  });

  return {
    salesOffices: Array.isArray(payload?.sales_offices) ? payload.sales_offices : [],
    somRequisites: Array.isArray(payload?.som_requisites) ? payload.som_requisites : [],
    dollarRequisites: Array.isArray(payload?.dollar_requisites) ? payload.dollar_requisites : [],
  };
}

export async function getTechnicalBase(options = {}) {
  return apiGet("/contact/technical-base/", {
    signal: options.signal,
  });
}
