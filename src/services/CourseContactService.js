import axios from "axios";

const buatApi = axios.create({
  baseURL: "https://billing-uat-api.sevenmentor.io/api/v1",
});
export const getCoursesList = async () => {
  const response = await buatApi.get("/courses/list/?limit=20000");
  return response.data.data;
};

export const getContactPersonsList = async () => {
  const response = await buatApi.get("/contactpersons/list/?limit=20000");
  return response.data.data;
}; 

export const getBranchesList = async () => {
  const response = await buatApi.get("/branches/list/?limit=2000");
  return response.data.data;
};

export const getBranch = async (id) => {
  const response = await buatApi.get("/branches/list/?limit=2000");
  return response.data.data;
};