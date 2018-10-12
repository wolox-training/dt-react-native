import api from '../config/api';

export default {
  /* getBookDetail: id => api.get('/books', { id }), */
  login: (email, pass) => api.get('/users', { email, password: pass }),

  saveStateToLocalStorage: token => {
    localStorage.setItem('token', token);
    api.setHeader('Authorization', token);
  }
};
