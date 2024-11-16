export default class Employee {
  constructor({ id, firstName, lastName, email, phone, hireDate, exitDate, status }) {
    this.id = id || null;
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.email = email || '';
    this.phone = phone || '';
    this.hireDate = hireDate || null;
    this.exitDate = exitDate || null;
    this.status = status || 'active';
  }

  /**
   * Format data to match backend structure
   */
  toBackendFormat() {
    return {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      phone: this.phone,
      hire_date: this.hireDate,
      exit_date: this.exitDate,
      status: this.status,
    };
  }
}
