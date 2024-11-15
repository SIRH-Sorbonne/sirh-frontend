import httpService from './http.service';

const API_URL = '/time_and_attendance';

const timeAndAttendanceService = {
  // Fonctions pour les absences
  getAllAbsences() {
    return httpService.get(`${API_URL}/absences`);
  },

  getAbsenceById(id) {
    return httpService.get(`${API_URL}/absences/${id}`);
  },

  createAbsence(absenceData) {
    return httpService.post(`${API_URL}/absences`, absenceData);
  },

  updateAbsence(id, absenceData) {
    return httpService.put(`${API_URL}/absences/${id}`, absenceData);
  },

  deleteAbsence(id) {
    return httpService.delete(`${API_URL}/absences/${id}`);
  },

  // Fonctions pour les horaires de travail
  getAllWorkSchedules() {
    return httpService.get(`${API_URL}/work_schedules`);
  },

  getWorkScheduleById(id) {
    return httpService.get(`${API_URL}/work_schedules/${id}`);
  },

  createWorkSchedule(scheduleData) {
    return httpService.post(`${API_URL}/work_schedules`, scheduleData);
  },

  updateWorkSchedule(id, scheduleData) {
    return httpService.put(`${API_URL}/work_schedules/${id}`, scheduleData);
  },

  deleteWorkSchedule(id) {
    return httpService.delete(`${API_URL}/work_schedules/${id}`);
  },

  // Fonctions pour les horaires de travail des employés
  getAllEmployeeWorkSchedules() {
    return httpService.get(`${API_URL}/employee_work_schedules`);
  },

  getEmployeeWorkScheduleById(id) {
    return httpService.get(`${API_URL}/employee_work_schedules/${id}`);
  },

  createEmployeeWorkSchedule(scheduleData) {
    return httpService.post(`${API_URL}/employee_work_schedules`, scheduleData);
  },

  updateEmployeeWorkSchedule(id, scheduleData) {
    return httpService.put(`${API_URL}/employee_work_schedules/${id}`, scheduleData);
  },

  deleteEmployeeWorkSchedule(id) {
    return httpService.delete(`${API_URL}/employee_work_schedules/${id}`);
  }
};

export default timeAndAttendanceService;