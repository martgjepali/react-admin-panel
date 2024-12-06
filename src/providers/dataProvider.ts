import {
  CreateParams,
  DataProvider,
  fetchUtils,
  UpdateParams,
} from "react-admin";
import {
  User,
  Package,
  FetchJsonResponse,
  Destination,
  Booking,
} from "../interfaces/Interfaces";

const API_URL = import.meta.env.VITE_API_URL;

const handleGetListResponse = async (
  response: FetchJsonResponse,
  resource: string
) => {
  if (!response.headers.has("X-Total-Count")) {
    throw new Error(
      "The X-Total-Count header is missing in the HTTP Response."
    );
  }

  const data = response.json.map((item: any) => {
    // Default to existing id if defined, else based on resource type
    let id =
      item.id ??
      (resource === "users"
        ? item.UserID
        : resource === "packages"
        ? item.PackageID
        : resource === "destinations"
        ? item.DestinationID
        : resource === "bookings"
        ? item.BookingID
        : resource === "payments"
        ? item.PaymentID
        : undefined);

    // If id is still undefined, throw an error or handle accordingly
    if (id === undefined) {
      console.error("ID not found for item: ", item);
      throw new Error(
        "ID not found for item, check resource type and item properties."
      );
    }

    return { ...item, id };
  });

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
      response.json.BookingID,
  };

  console.log(`Fetched data for resource ${resource}:`, data);

  return {
    data,
  };
};

const createDestinationFormData = (
  params: CreateParams<Destination> | UpdateParams<Destination>
) => {
  const formData = new FormData();

  if (params.data.DestinationID) {
    formData.append("DestinationID", params.data.DestinationID.toString());
  }
  if (params.data.DestinationName) {
    formData.append("DestinationName", params.data.DestinationName);
  }
  if (params.data.Country) {
    formData.append("Country", params.data.Country);
  }
  if (params.data.Description) {
    formData.append("Description", params.data.Description);
  }

  if (params.data.image) {
    if (params.data.image.rawFile) {
      formData.append("image", params.data.image.rawFile);
    }
    if (params.data.image.title) {
      formData.append("image_title", params.data.image.title);
    }
  }

  return formData;
};

const createPackageFormData = (
  params: CreateParams<Package> | UpdateParams<Package>
): FormData => {
  const formData = new FormData();

  if (params.data.PackageName) {
    formData.append("PackageName", params.data.PackageName);
  }
  if (params.data.Description) {
    formData.append("Description", params.data.Description);
  }
  if (params.data.Price) {
    formData.append("Price", params.data.Price.toString());
  }
  if (params.data.Duration) {
    formData.append("Duration", params.data.Duration.toString());
  }
  if (params.data.StartDate) {
    formData.append("StartDate", params.data.StartDate.toString());
  }
  if (params.data.EndDate) {
    formData.append("EndDate", params.data.EndDate.toString());
  }
  if (params.data.DestinationID) {
    formData.append("DestinationID", params.data.DestinationID.toString());
  }
  return formData;
};

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination || { page: 1, perPage: 10 };
    const { field, order } = params.sort || { field: "id", order: "ASC" };
    const url = `${API_URL}/${resource}?skip=${
      (page - 1) * perPage
    }&limit=${perPage}&_sort=${field}&_order=${order}`;
    const response: FetchJsonResponse = await fetchUtils.fetchJson(url);
    return handleGetListResponse(response, resource);
  },

  getOne: async (resource, params) => {
    const url = `${API_URL}/${resource}/${params.id}`;
    const response = await fetchUtils.fetchJson(url);
    return handleSingleResponse<User | Package | Destination | Booking>(
      response,
      resource
    );
  },

  create: async (resource: string, params: CreateParams) => {
    let options: RequestInit = {};

    if (resource === "destinations" || resource === "packages") {
      const formData =
        resource === "packages"
          ? createPackageFormData(params)
          : createDestinationFormData(params);
      options = {
        method: "POST",
        body: formData,
      };
    } else {
      options = {
        method: "POST",
        body: JSON.stringify(params.data),
        headers: new Headers({ "Content-Type": "application/json" }),
      };
    }

    const url = `${API_URL}/${resource}`;
    try {
      const response = await fetchUtils.fetchJson(url, options);
      return handleSingleResponse<Package | Destination>(response, resource);
    } catch (error) {
      console.error("Create request failed:", error);
      throw error;
    }
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
      body: JSON.stringify({ ids: params.ids }),
      headers: new Headers({ "Content-Type": "application/json" }),
    };
    const response = await fetchUtils.fetchJson(url, options);
    return {
      data: response.json as number[],
    };
  },
};
