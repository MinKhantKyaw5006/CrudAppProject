
import axios from 'axios'


// const API = axios.create({ baseURL: 'http://localhost:5000' });

// const API = axios.create({ baseURL: 'http://localhost:5000' });
const API = axios.create({ baseURL: 'https://chripmedia-crud-c021dt5um-minkhantkyaw5006.vercel.app' });
// API.interceptors.request.use((req) => {
//     if (localStorage.getItem('profile')) {
//       req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }
  
//     return req;
//   });


export const getUser=(userId)=> API.get(`/user/${userId}`)

export const updateUser = (id, formData)=>API.put(`/user/${id}`, formData)

export const getAlluser = ()=> API.get('/user')

export const followUser = (id,data) => API.put(`/user/${id}/follow` , data)

export const UnFollowUser = (id,data) => API.put(`/user/${id}/unfollow` , data)