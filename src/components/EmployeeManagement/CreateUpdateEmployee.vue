<template>
    <div class="p-4">
        <h2>{{ isUpdate ? 'Mettre à jour un employé' : 'Créer un nouvel employé' }}</h2>
        <FormGenerator :fields="fields" @submit="onSubmit" />
    </div>
</template>

<script>
import FormGenerator from '@/components/FormGenerator.vue';
import EmployeeService from '@/services/employeeManagement.service';

export default {
    components: {
        FormGenerator,
    },
    props: {
        employeeData: {
            type: Object,
            default: null, // Si null, on passe en mode "create"
        },
    },
    data() {
        return {
            fields: [],
        };
    },
    computed: {
        isUpdate() {
            return !!this.employeeData; // Si employeeData est défini, on est en mode "update"
        },
    },
    mounted() {
        console.log('alors');
        // Initialise les champs avec des valeurs par défaut ou les données de l'employé
        this.fields = this.initializeFields();
    },
    methods: {
        initializeFields() {
            const defaultFields = [
                { name: 'firstName', label: 'Prénom', type: 'text', placeholder: 'Entrez le prénom', initialValue: '' },
                { name: 'lastName', label: 'Nom', type: 'text', placeholder: 'Entrez le nom', initialValue: '' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'Entrez l’email', initialValue: '' },
                { name: 'phone', label: 'Téléphone', type: 'text', placeholder: 'Entrez le téléphone', initialValue: '' },
                { name: 'hireDate', label: 'Date d’embauche', type: 'date', placeholder: 'Sélectionnez une date', initialValue: '' },
                { name: 'exitDate', label: 'Date de départ', type: 'date', placeholder: 'Sélectionnez une date', initialValue: '' },
                { name: 'status', label: 'Statut', type: 'text', placeholder: 'Actif / Inactif', initialValue: 'active' },
            ];

            // Si des données existent (mode update), on les injecte
            if (this.employeeData) {
                return defaultFields.map(field => ({
                    ...field,
                    initialValue: this.employeeData[field.name] || field.initialValue,
                }));
            }

            // Sinon, on garde les valeurs par défaut
            return defaultFields;
        },
        async onSubmit(formData) {
            try {
                if (this.isUpdate) {
                    // Mode "update" : appeler le service pour mettre à jour
                    await EmployeeService.updateEmployee(this.employeeData.id, formData);
                    alert('Employé mis à jour avec succès');
                } else {
                    // Mode "create" : appeler le service pour créer un nouvel employé
                    await EmployeeService.createEmployee(formData);
                    alert('Nouvel employé créé avec succès');
                }
                this.$emit('formSubmitted'); // Notifie le parent pour mettre à jour les données
            } catch (error) {
                console.error('Erreur lors de l\'envoi du formulaire', error);
                alert('Une erreur est survenue. Veuillez réessayer.');
            }
        },
    },
};
</script>

<style scoped>
h2 {
    margin-bottom: 16px;
    font-size: 1.5rem;
}
</style>
