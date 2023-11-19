import axios from "axios";

// id 읽어서
export const getPost = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
// 받아오기
export const getUsers = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);
