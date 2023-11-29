import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { dispatch } from './store';
const api = axios.create({
  baseURL: 'https://coale-backend.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      dispatch({ type: 'SET_TOKEN', payload: false });
    }
    return Promise.reject(error);
  }
);

export const getItems = async () => {
  try {
    const response = await api.get('/items');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const CategoriesItem = async (parameter) => {
  try {
    const response = await api.get(`/items/categories/${parameter}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const SearchItem = async (parameter) => {
  try {
    const response = await api.get(`/items/search/${parameter}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const createItem = async (itemData) => {
  try {
    const response = await api.post('/items', itemData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const SIGNUP = async (itemData) => {
  try {
    const response = await api.post('/users', itemData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const LoginApi = async (account) => {
  try {
    const response = await api.post('/login', account);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const PayOrder = async (obj) => {
  try {
    const response = await api.post(`/orders`, obj);
    return response.data;
  } catch (error) {
    throw new Error(error.response);
  }
};

export const fetchOrderList = async () => {
  try {
    const response = await api.get('/orders');
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const DeleteOrderItem = async (parameter) => {
  try {
    const response = await api.delete(`/orders/${parameter}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};