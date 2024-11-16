<template>
  <h1>Gestion des employés</h1>
  <div>
      <Button label="Créer un employé" @click="openCreateForm" />
      <EmployeeList @edit="openUpdateForm" />
      
      <Dialog v-model:visible="showForm" @close="closeForm">
          <CreateUpdateEmployee
              :employeeData="selectedEmployee"
              @formSubmitted="refreshEmployeeList"
          />
      </Dialog>

  </div>
</template>

<script>
import EmployeeList from '../components/EmployeeManagement/EmployeeList.vue';
import CreateUpdateEmployee from '../components/EmployeeManagement/CreateUpdateEmployee.vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

export default {
  components: {
      EmployeeList,
      CreateUpdateEmployee,
      Dialog,
      Button,
  },
  data() {
      return {
          showForm: false,
          selectedEmployee: null, // Pour update, sinon null pour créer
      };
  },
  methods: {
      openCreateForm() {
          this.selectedEmployee = null; // Mode création
          this.showForm = true;
          console.log("Formulaire ouvert : ", this.showForm);

      },
      openUpdateForm(employee) {
          this.selectedEmployee = employee; // Mode mise à jour
          this.showForm = true;
      },
      closeForm() {
          this.showForm = false;
      },
      refreshEmployeeList() {
          // Actualiser la liste des employés
          console.log('Actualiser la liste des employés');
      },
  },
};
</script>

<style scoped>
.p-dialog {
    display: block !important;
}
</style>
