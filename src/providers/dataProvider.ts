import { DataProvider, fetchUtils } from "react-admin";
import {
  User,
  Package,
  FetchJsonResponse,
  Destination,
  Booking,
} from "../interfaces/Interfaces";

const API_URL = "http://localhost:8000";

const handleGetListResponse = async <T>(
  response: FetchJsonResponse,
  resource: string
) => {
  if (!response.headers.has("X-Total-Count")) {
    throw new Error(
      "The X-Total-Count header is missing in the HTTP Response."
    );
  }

  const data = response.json.map((item: T & { id: number }) => ({
    ...item,
    id:
      item.id ||
      (item as any).UserID ||
      (item as any).PackageID ||
      (item as any).DestinationID ||
      (item as any).BookingID, // Ensure `id` is correctly set
  }));

  console.log(`Fetched data for resource ${resource}:`, data);

  return {
    data,
    total: parseInt(response.headers.get("X-Total-Count") || "0", 10),
  };
};

const handleSingleResponse = async <T>(
  response: FetchJsonResponse,
  resource: string
) => {
  const data = {
    ...response.json,
    id:
      response.json.id ||
      response.json.UserID ||
      response.json.PackageID ||
      response.json.DestinationID ||
      response.json.BookingID, // Ensure `id` is correctly set
  };

  console.log(`Fetched data for resource ${resource}:`, data);

  return {
    data,
  };
};

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination || { page: 1, perPage: 10 };
    const { field, order } = params.sort || { field: "id", order: "ASC" };
    const url = `${API_URL}/${resource}?skip=${
      (page - 1) * perPage
    }&limit=${perPage}&_sort=${field}&_order=${order}`;
    const response = await fetchUtils.fetchJson(url);
    return handleGetListResponse<User | Package | Destination | Booking>(
      response,
      resource
    );
  },

  getOne: async (resource, params) => {
    const url = `${API_URL}/${resource}/${params.id}`;
    const response = await fetchUtils.fetchJson(url);
    return handleSingleResponse<User | Package | Destination | Booking>(
      response,
      resource
    );
  },

  create: async (resource, params) => {
    const url = `${API_URL}/${resource}`;
    const options = {
      method: "POST",
      body: JSON.stringify(params.data),
      headers: new Headers({ "Content-Type": "application/json" }),
    };
    const response = await fetchUtils.fetchJson(url, options);
    return handleSingleResponse<Package | Destination>(response, resource);
  },

  update: async (resource, params) => {
    const url = `${API_URL}/${resource}/${params.id}`;
    const options = {
      method: "PUT",
      body: JSON.stringify(params.data),
      headers: new Headers({ "Content-Type": "application/json" }),
    };
    const response = await fetchUtils.fetchJson(url, options);
    return handleSingleResponse<Package | Destination>(response, resource);
  },

  delete: async (resource, params) => {
    const url = `${API_URL}/${resource}/${params.id}`;
    const options = {
      method: "DELETE",
      headers: new Headers({ "Content-Type": "application/json" }),
    };
    const response = await fetchUtils.fetchJson(url, options);
    return {
      data: { id: params.id } as any,
    };
  },

  deleteMany: async (resource, params) => {
    const url = `${API_URL}/${resource}`;
    const options = {
      method: "DELETE",
      body: JSON.stringify(params.ids),
      headers: new Headers({ "Content-Type": "application/json" }),
    };
    const response = await fetchUtils.fetchJson(url, options);
    return {
      data: params.ids,
    };
  },
};
