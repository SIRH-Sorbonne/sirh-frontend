import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'  // Importez le thème Aura (ou un autre thème de votre choix)
import 'primeicons/primeicons.css'
import Menubar from 'primevue/menubar';


const app = createApp(App)
app.component('Menubar', Menubar);



app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: 'html.dark-mode',
        }
    }
})

app.mount('#app')
