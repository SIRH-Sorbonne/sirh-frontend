import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'  // Importez le thème Aura (ou un autre thème de votre choix)
import Lara from '@primevue/themes/lara'  // Importez le thème Lara (ou un autre thème de votre choix)
import Material from '@primevue/themes/material'  // Importez le thème Material (ou un autre thème de votre choix)
import Nora from '@primevue/themes/nora'  // Importez le thème Nora (ou un autre thème de votre choix)
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
