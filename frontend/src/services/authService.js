import API from './api';

export const login = async (email, password) => {
  const response = await API.post('/auth/login', { email, password });
  return response.data;
};

export const register = async (name, email, password) => {
  const response = await API.post('/auth/register', { name, email, password });
  return response.data;
};

export const googleLogin = async (payload) => {
  const response = await API.post('/auth/google', payload);
  return response.data;
};


export const getMe = async () => {
  const response = await API.get('/auth/me');
  return response.data;
};

export const updateProfile = async (name) => {
  const response = await API.put('/users/profile', { name });
  return response.data;
};
