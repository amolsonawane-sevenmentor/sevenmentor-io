import axiosInstance from "./AxiosInstance";

const API_URL = "/blogs";

export const fetchBlogPosts = async (limit=10) => {
  try {
    const response = await axiosInstance.get(`${API_URL}?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error Fetching Blogs", error);
    throw error;
  }
};

// New function to fetch initial posts for immediate display
export const fetchInitialBlogPosts = async () => {
  try {
    const response = await axiosInstance.get(`${API_URL}?limit=9`);
    return response.data;
  } catch (error) {
    console.error("Error Fetching Initial Blogs", error);
    throw error;
  }
};

// New function to fetch remaining posts for background loading
export const fetchRemainingBlogPosts = async () => {
  try {
    const response = await axiosInstance.get(`${API_URL}?limit=1000000&offset=9`);
    return response.data;
  } catch (error) {
    console.error("Error Fetching Remaining Blogs", error);
    throw error;
  }
};

export const fetchBlogsByCategory = async (categoryId) => {
  try {
    const response = await axiosInstance.get(`${API_URL}`, {
      params: {
        categoryId: categoryId
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs by category:", error);
    throw error;
  }
}

export const fetchBlogPost = async (id) => {
  try {
    const response = await axiosInstance.get(`${API_URL}/${id}`);
    return response.data;
  }
  catch (error) {
      console.error("Error Fetching Blog Post", error);
      throw error;
    }
  }

export const fetchBlogCategories = async (limit =10) => {
  try {
    const response = await axiosInstance.get(`/blogcategories?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error Fetching Blog Categories", error);
    throw error;
  }
};

export const fetchBlogPromotion = async () => {
  try {
    const response = await axiosInstance.get(`/promotionblogs`);
    return response.data;
  } catch (error) {
    console.error("Error Fetching Blog Promotions", error);
    throw error;
  }
};

export const fetchMetas = async () => {
  try {
    const response = await axiosInstance.get(`/metas`);
    return response.data;
  } catch (error) {
    console.error("Error Fetching Metas", error);
    throw error;
  }
}
