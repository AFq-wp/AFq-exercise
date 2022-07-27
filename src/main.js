import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index'
import { setupNaiveUI } from '@/plugins';
import {setupStore} from '@/store'
import "virtual:windi.css"
const app = createApp(App)
app.use(router)

// 挂载NaiveUI
setupNaiveUI(app)

// 挂载pinia
setupStore(app);
router.isReady().then(() => app.mount('#app'))


