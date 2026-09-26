import API from './api';

export const getExams = async () => {
  const response = await API.get('/exams');
  return response.data;
};

export const getExamById = async (id) => {
  const response = await API.get(`/exams/${id}`);
  return response.data;
};

export const createExam = async (examData) => {
  const response = await API.post('/exams', examData);
  return response.data;
};

export const updateExam = async (id, examData) => {
  const response = await API.put(`/exams/${id}`, examData);
  return response.data;
};

export const deleteExam = async (id) => {
  const response = await API.delete(`/exams/${id}`);
  return response.data;
};

export const toggleExamStatus = async (id) => {
  const response = await API.patch(`/exams/${id}/status`);
  return response.data;
};

export const startAttempt = async (id, difficulty) => {
  const response = await API.post(`/exams/${id}/start-attempt`, { difficulty });
  return response.data;
};

export const getExamQuestions = async (examId) => {
  const response = await API.get(`/exams/${examId}/questions`);
  return response.data;
};

export const addQuestion = async (examId, questionData) => {
  const response = await API.post(`/exams/${examId}/questions`, questionData);
  return response.data;
};

export const updateQuestion = async (id, questionData) => {
  const response = await API.put(`/questions/${id}`, questionData);
  return response.data;
};

export const deleteQuestion = async (id) => {
  const response = await API.delete(`/questions/${id}`);
  return response.data;
};
