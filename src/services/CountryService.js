import axiosInstance from "./AxiosInstance.js";
const API_URL = "/countries";

export const getCountries = async (sort = "asc", limit = 1) => {
  try {
    const response = await axiosInstance.get(
      `${API_URL}?limit=${limit}&sort=${sort}`
    );
    return response.data;
  } catch (error) {
    console.error("Error Fetching Countries", error);
    throw error;
  }
};

export const searchCountries = async (search = "", limit = 1000) => {
  try {
    const response = await axiosInstance.get(
      `${API_URL}?limit=${limit}&search=${search}`
    );
    return response.data;
  } catch (error) {
    console.error("Error Searching Countries", error);
    throw error;
  }
};
