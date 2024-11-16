<template>
    <Menubar :model="items">
        <template #item="{ item, props, hasSubmenu }">
        <router-link v-if="item.to" v-slot="{ href, navigate }" :to="item.to" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span :class="item.icon" />
                <span>{{ item.label }}</span>
            </a>
        </router-link>
        <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
        </a>
    </template>
      <template #start>
        <img alt="logo" src="/Logo_of_the_Pantheon-Sorbonne_University_in_Paris.png" height="40" class="mr-2" />
      </template>
      <template #end>
        <Button :icon="isDarkMode ? 'pi pi-sun' : 'pi pi-moon'" aria-label="Save" @click="toggleDarkMode()" />
        </template>
    </Menubar>
  </template>
  
  <script setup>
  import Menubar from 'primevue/menubar';
  import Button from 'primevue/button';
    import { ref, onMounted } from 'vue';
  
  const items = [
    {
      label: 'Accueil',
      icon: 'pi pi-fw pi-home',
      to: '/'
    },
    {
      label: 'Recrutement',
      icon: 'pi pi-fw pi-users',
      to: '/recruitment'
    },
    {
      label: 'Gestion des Employés',
      icon: 'pi pi-fw pi-user',
      to: '/employee-management'
    },
    {
      label: 'Formation',
      icon: 'pi pi-fw pi-book',
      to: '/learning-and-development'
    },
    {
      label: 'Temps et Présence',
      icon: 'pi pi-fw pi-calendar',
      to: '/time-and-attendance'
    }
  ];

  const isDarkMode = ref(false);

    onMounted(() => {
    const savedMode = localStorage.getItem('darkMode');
    isDarkMode.value = savedMode === 'true';
    if (isDarkMode.value) {
        document.documentElement.classList.add('dark-mode');
    }
    });

    const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode.value);
    };
  </script>