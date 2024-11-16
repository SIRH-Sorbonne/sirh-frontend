<template>
  <div class="employee-list">
      <DataTable :value="employees" class="p-datatable-sm">
          <Column field="firstName" header="Prénom" />
          <Column field="lastName" header="Nom" />
          <Column field="email" header="Email" />
          <Column field="phone" header="Téléphone" />
          <Column field="hireDate" header="Date d'embauche" />
          <Column field="status" header="Statut" />
          <Column class="w-24 !text-end" header="Actions">
                <template #body="{ data }">
                    <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editEmployee(data)" />
                    <Button icon="pi pi-trash" class="p-button-rounded p-button-danger" @click="deleteEmployee(data)" />
                </template>
            </Column>
      </DataTable>

      <!-- Modale de confirmation de suppression -->
      <Dialog v-model:visible="showDeleteDialog" header="Confirmation" :closable="false">
          <p>Êtes-vous sûr de vouloir supprimer cet employé ?</p>
          <div class="p-d-flex p-jc-end">
              <Button label="Annuler" icon="pi pi-times" class="p-button-text" @click="cancelDelete" />
              <Button label="Supprimer" icon="pi pi-check" class="p-button-danger" @click="confirmDelete" />
          </div>
      </Dialog>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import EmployeeService from '../../services/employeeManagement.service';

export default {
  components: {
      DataTable,
      Column,
      Dialog,
      Button
  },
  data() {
      return {
          employees: [], // Liste des employés
          showDeleteDialog: false, // Affiche la modale de confirmation
          employeeToDelete: null, // Employé à supprimer
      };
  },
  mounted() {
      this.fetchEmployees();
  },
  methods: {
      async fetchEmployees() {
          try {
              this.employees = await EmployeeService.getAllEmployees();
          } catch (error) {
              console.error('Erreur lors de la récupération des employés', error);
              alert('Une erreur est survenue. Veuillez réessayer.');
          }
      },
      editEmployee(employee) {
          this.$emit('edit', employee); // Émettre un événement pour ouvrir le formulaire d'édition
      },
      confirmDelete() {
          if (this.employeeToDelete) {
              EmployeeService.deleteEmployee(this.employeeToDelete.id)
                  .then(() => {
                      this.employees = this.employees.filter(e => e.id !== this.employeeToDelete.id);
                      alert('Employé supprimé avec succès.');
                  })
                  .catch(error => {
                      console.error('Erreur lors de la suppression de l\'employé', error);
                      alert('Impossible de supprimer cet employé. Veuillez réessayer.');
                  })
                  .finally(() => {
                      this.showDeleteDialog = false;
                      this.employeeToDelete = null;
                  });
          }
      },
      deleteEmployee(employee) {
          this.employeeToDelete = employee;
          this.showDeleteDialog = true;
      },
      cancelDelete() {
          this.showDeleteDialog = false;
          this.employeeToDelete = null;
      },
  },
};
</script>

<style scoped>
.employee-list {
  padding: 1rem;
}
</style>
