import Employee from '../models/employee-management/Employee';
import httpService from './http.service';

const API_URL = '/employee_management';

const employeeManagementService = {
  async getAllEmployees() {
    return httpService.get(`${API_URL}/employees`).then((response) => {
      const employees = [];
      response.data.forEach(element => {
        const employee = new Employee({
            id: element.id,
            firstName: element.first_name,
            lastName: element.last_name,
            email: element.email,
            phone: element.phone,
            hire_date: element.hire_date,
            exit_date: element.exit_date,
            status: element.status,
            created_at: element.created_at,
            updated_at: element.updated_at
        });
        employees.push(employee);
      });
      return employees;
    });
  },

  getEmployeeById(id) {
    return httpService.get(`${API_URL}/employees/${id}`);
  },

  createEmployee(employeeData) {
    const employee = new Employee(employeeData);
    return httpService.post(`${API_URL}/employees`, employee.toBackendFormat());
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