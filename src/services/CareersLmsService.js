import axios from "axios";

const buatApi = axios.create({
  baseURL: "https://stage-billing-api.sevenmentor.io/api/v1",
});

// Get all jobs from LMS
export const getJobsFromLms = async () => {
  const response = await buatApi.get("/jobprofiles/?limit=20000");
  return response.data.data;
};

// Get single job by ID
export const getJobById = async (id) => {
  const response = await buatApi.get(`/jobprofiles/${id}`);
  return response.data.data;
};

// Get jobs by department (if your API supports filtering)
export const getJobsByDepartment = async (department) => {
  const response = await buatApi.get(`/jobprofiles/?department=${department}&limit=20000`);
  return response.data.data;
};

// Get jobs by status (if your API supports filtering)
export const getJobsByStatus = async (status) => {
  const response = await buatApi.get(`/jobprofiles/?status=${status}&limit=20000`);
  return response.data.data;
};

