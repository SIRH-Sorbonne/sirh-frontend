<template>
    <div class="home">
      <h1>Bienvenue dans le Système d'Information de Ressources Humaines</h1>
      <p>Choisissez un module pour commencer :</p>
      <div class="module-links">
        <router-link to="/recruitment" class="p-button p-button-primary">
          Recrutement
        </router-link>
        <router-link to="/employee-management" class="p-button p-button-secondary">
          Gestion des Employés
        </router-link>
        <router-link to="/learning-and-development" class="p-button p-button-success">
          Formation et Développement
        </router-link>
        <router-link to="/time-and-attendance" class="p-button p-button-info">
          Temps et Présence
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  // Pas besoin de logique supplémentaire pour cette vue simple
  </script>
  
  <style scoped>
  .home {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    color: #2c3e50;
    margin-bottom: 20px;
  }
  
  p {
    color: #34495e;
    margin-bottom: 30px;
  }
  
  .module-links {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }
  
  .p-button {
    width: 250px;
  }
  </style>
  