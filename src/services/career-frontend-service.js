// Frontend Career Service for API calls using Axios Instance
import axiosInstance from "./AxiosInstance"

const API_URL = "/careers"
const CATEGORY_URL = "/careercategories"
const META_URL = "/careermetas"

export const careerFrontendService = {
  // Get all careers with optional filters
  getCareers: async (params = {}) => {
    try {
      const queryParams = new URLSearchParams()

      if (params.limit) queryParams.append("limit", params.limit)
      if (params.category) queryParams.append("category", params.category)
      if (params.search) queryParams.append("search", params.search)
      if (params.type) queryParams.append("type", params.type)
      if (params.location) queryParams.append("location", params.location)

      const url = queryParams.toString() ? `${API_URL}?${queryParams.toString()}` : API_URL
      const response = await axiosInstance.get(url)
      return response.data
    } catch (error) {
      console.error("Error fetching careers:", error)
      throw error
    }
  },

  // Get single career by slug
  getCareerBySlug: async (slug) => {
    try {
      const response = await axiosInstance.get(`${API_URL}/${slug}`)
      return response.data
    } catch (error) {
      console.error("Error fetching career by slug:", error)
      throw error
    }
  },

  // Get career categories
  getCareerCategories: async (limit = 1000) => {
    try {
      const response = await axiosInstance.get(`${CATEGORY_URL}?limit=${limit}`)
      return response.data
    } catch (error) {
      console.error("Error fetching career categories:", error)
      throw error
    }
  },

  // Get career metas
  getCareerMetas: async (limit = 10000) => {
    try {
      const response = await axiosInstance.get(`${META_URL}?limit=${limit}`)
      return response.data
    } catch (error) {
      console.error("Error fetching career metas:", error)
      throw error
    }
  },

  // Search careers
  searchCareers: async (searchTerm, searchField = "title") => {
    try {
      const response = await axiosInstance.get(
        `${API_URL}?search=${encodeURIComponent(searchTerm)}&searchField=${searchField}`,
      )
      return response.data
    } catch (error) {
      console.error("Error searching careers:", error)
      throw error
    }
  },

  // Get career by ID (for admin/backend use)
  getCareerById: async (id) => {
    try {
      const response = await axiosInstance.get(`${API_URL}/${id}`)
      return response.data
    } catch (error) {
      console.error("Error fetching career by ID:", error)
      throw error
    }
  },

  // Get single career category
  getCareerCategory: async (id) => {
    try {
      const response = await axiosInstance.get(`${CATEGORY_URL}/${id}`)
      return response.data
    } catch (error) {
      console.error("Error fetching career category:", error)
      throw error
    }
  },

  // Get single career meta
  getCareerMeta: async (id) => {
    try {
      const response = await axiosInstance.get(`${META_URL}/${id}`)
      return response.data
    } catch (error) {
      console.error("Error fetching career meta:", error)
      throw error
    }
  },

  // Search career categories
  searchCareerCategories: async (searchTerm, searchField = "title") => {
    try {
      const response = await axiosInstance.get(
        `${CATEGORY_URL}?search=${encodeURIComponent(searchTerm)}&searchField=${searchField}`,
      )
      return response.data
    } catch (error) {
      console.error("Error searching career categories:", error)
      throw error
    }
  },

  // Search career metas
  searchCareerMetas: async (searchTerm, searchField = "title") => {
    try {
      const response = await axiosInstance.get(
        `${META_URL}?search=${encodeURIComponent(searchTerm)}&searchField=${searchField}`,
      )
      return response.data
    } catch (error) {
      console.error("Error searching career metas:", error)
      throw error
    }
  },
}
