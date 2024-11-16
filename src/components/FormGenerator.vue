<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 w-full sm:w-80">
        <div v-for="(field, index) in fields" :key="index" class="flex flex-col gap-1">
            <label :for="field.name">{{ field.label }}</label>
            <InputText
                v-if="field.type !== 'textarea'"
                :type="field.type"
                :name="field.name"
                :placeholder="field.placeholder"
                v-model="formData[field.name]"
            />
            <Textarea
                v-else
                :name="field.name"
                :placeholder="field.placeholder"
                v-model="formData[field.name]"
            />
        </div>
        <Button type="submit" severity="secondary" label="Submit" />
    </form>
</template>

<script>
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';

export default {
    components: {
        InputText,
        Textarea,
        Button,
    },
    props: {
        fields: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            formData: {},
        };
    },
    mounted() {
        this.fields.forEach(field => {
            this.$set(this.formData, field.name, field.initialValue || '');
        });
    },
    methods: {
        handleSubmit() {
            console.log('Form Data:', this.formData);
            this.$emit('submit', this.formData);
        },
    },
};
</script>

<style scoped>
form {
    max-width: 400px;
}
</style>
