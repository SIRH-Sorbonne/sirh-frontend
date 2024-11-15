import httpService from './http.service';

const API_URL = '/employee_management';

const employeeManagementService = {
  getAllEmployees() {
    return httpService.get(`${API_URL}/employees`);
  },

  getEmployeeById(id) {
    return httpService.get(`${API_URL}/employees/${id}`);
  },

  createEmployee(employeeData) {
    return httpService.post(`${API_URL}/employees`, employeeData);
  },

  updateEmployee(id, employeeData) {
    return httpService.put(`${API_URL}/employees/${id}`, employeeData);
  },

  deleteEmployee(id) {
    return httpService.delete(`${API_URL}/employees/${id}`);
  },

  // Fonctions pour les contrats
  getAllContracts() {
    return httpService.get(`${API_URL}/contracts`);
  },

  getContractById(id) {
    return httpService.get(`${API_URL}/contracts/${id}`);
  },

  createContract(contractData) {
    return httpService.post(`${API_URL}/contracts`, contractData);
  },

  updateContract(id, contractData) {
    return httpService.put(`${API_URL}/contracts/${id}`, contractData);
  },

  deleteContract(id) {
    return httpService.delete(`${API_URL}/contracts/${id}`);
  }
};

export default employeeManagementService;