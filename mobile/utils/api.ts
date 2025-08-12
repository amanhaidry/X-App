import axios, { AxiosInstance } from "axios";
import { useAuth } from "@clerk/clerk-expo";

// ! 🔥 localhost api would not work on your actual physical device
const API_BASE_URL ="https://x-app-lake.vercel.app/api";
// const API_BASE_URL = "http://localhost:5001/api";
// const API_BASE_URL = "http://192.168.29.19:5001/api";
// const API_BASE_URL = "http://127.0.0.1:5001/api";

console.log("API Base URL:", API_BASE_URL); // Add this line for debugging

// this will basically create an authenticated api, pass the token into our headers
export const createApiClient = (
  getToken: () => Promise<string | null>
): AxiosInstance => {
  const api = axios.create({ baseURL: API_BASE_URL });

  api.interceptors.request.use(async (config) => {
    const token = await getToken();
    console.log("Clerk Token:", token); // Keep this line for debugging
    console.log("Full Request URL:", config.url);
    console.log("Request Method:", config.method);
    
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    console.log("Request Headers:", config.headers);
    return config;
  });

  return api;
};

export const useApiClient = (): AxiosInstance => {
  const { getToken } = useAuth();
  console.log("useApiClient getToken:", getToken); // Add this line for debugging
  return createApiClient(getToken);
};

export const userApi = {
  syncUser: (api: AxiosInstance) => api.post("/users/sync"),
  getCurrentUser: (api: AxiosInstance) => api.get("/users/me"),
  updateProfile: (api: AxiosInstance, data: any) =>
    api.put("/users/profile", data),
};

export const postApi = {
  createPost: (api: AxiosInstance, data: { content: string; image?: string }) =>
    api.post("/posts", data),
  getPosts: (api: AxiosInstance) => api.get("/posts"),
  getUserPosts: (api: AxiosInstance, username: string) =>
    api.get(`/posts/user/${username}`),
  likePost: (api: AxiosInstance, postId: string) =>
    api.post(`/posts/${postId}/like`),
  deletePost: (api: AxiosInstance, postId: string) =>
    api.delete(`/posts/${postId}`),
};

export const commentApi = {
  createComment: (api: AxiosInstance, postId: string, content: string) =>
    api.post(`/comments/post/${postId}`, { content }),
};