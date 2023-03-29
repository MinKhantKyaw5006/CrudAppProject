// import axios from "axios"

// const API = axios.create({baseURL: "http://localhost:5000"})

// export const logIn = (formdata) => API.post('/auth/login', formdata)

// export const signUp = (formdata) => API.post('/auth/register', formdata)



import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' });
// const API = axios.create({ baseURL: 'https://chripmedia-crud-c021dt5um-minkhantkyaw5006.vercel.app' });
export const logIn= (formData)=> API.post('/auth/login',formData);

export const signUp = (formData) => API.post('/auth/register', formData);