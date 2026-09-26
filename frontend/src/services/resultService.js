import API from './api';

export const submitExam = async (examId, submissionData) => {
  const response = await API.post(`/exams/${examId}/submit`, submissionData);
  return response.data;
};

export const getMyResults = async () => {
  const response = await API.get('/results/my-results');
  return response.data;
};

export const getResultById = async (id) => {
  const response = await API.get(`/results/${id}`);
  return response.data;
};

export const getAdminResults = async (params = {}) => {
  const response = await API.get('/results/admin/all', { params });
  return response.data;
};

export const deleteResult = async (id) => {
  const response = await API.delete(`/results/${id}`);
  return response.data;
};

export const clearAllResults = async () => {
  const response = await API.delete('/results/clear-all');
  return response.data;
};



export const getAdminStats = async () => {
  const response = await API.get('/users/admin/stats');
  return response.data;
};

export const getStudentStats = async () => {
  const response = await API.get('/users/student/stats');
  return response.data;
};

export const getStudentsList = async () => {
  const response = await API.get('/users/admin/students');
  return response.data;
};
