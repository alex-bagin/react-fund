import axios from "axios";
import { usePosts } from "../hooks/usePost";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response;
  }

  static async getById(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
  }
  static async getCommetnsById(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return response.data;
  }

  static async getDogImg() {
    const response = await axios.get(`https://random.dog/woof.json`);
    return response.data;
  }
}
