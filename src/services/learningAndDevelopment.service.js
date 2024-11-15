import httpService from './http.service';

const API_URL = '/learning_and_development';

const learningAndDevelopmentService = {
  // Fonctions pour les cours
  getAllCourses() {
    return httpService.get(`${API_URL}/courses`);
  },

  getCourseById(id) {
    return httpService.get(`${API_URL}/courses/${id}`);
  },

  createCourse(courseData) {
    return httpService.post(`${API_URL}/courses`, courseData);
  },

  updateCourse(id, courseData) {
    return httpService.put(`${API_URL}/courses/${id}`, courseData);
  },

  deleteCourse(id) {
    return httpService.delete(`${API_URL}/courses/${id}`);
  },

  // Fonctions pour les compétences des employés
  getAllEmployeeSkills() {
    return httpService.get(`${API_URL}/employee_skills`);
  },

  getEmployeeSkillById(id) {
    return httpService.get(`${API_URL}/employee_skills/${id}`);
  },

  createEmployeeSkill(skillData) {
    return httpService.post(`${API_URL}/employee_skills`, skillData);
  },

  updateEmployeeSkill(id, skillData) {
    return httpService.put(`${API_URL}/employee_skills/${id}`, skillData);
  },

  deleteEmployeeSkill(id) {
    return httpService.delete(`${API_URL}/employee_skills/${id}`);
  },

  // Fonctions pour les sessions
  getAllSessions() {
    return httpService.get(`${API_URL}/sessions`);
  },

  getSessionById(id) {
    return httpService.get(`${API_URL}/sessions/${id}`);
  },

  createSession(sessionData) {
    return httpService.post(`${API_URL}/sessions`, sessionData);
  },

  updateSession(id, sessionData) {
    return httpService.put(`${API_URL}/sessions/${id}`, sessionData);
  },

  deleteSession(id) {
    return httpService.delete(`${API_URL}/sessions/${id}`);
  }
};

export default learningAndDevelopmentService;