import axios from 'axios'
const url ='http://localhost:5000/users'
export const fetchUsers = () => axios.get(url);
export const createUser = (newPost) => axios.post(url, newPost);
export const updateUser = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);


