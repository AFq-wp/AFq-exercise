
import type { App } from 'vue';
import { createPinia, storeToRefs } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist'

export function setupStore(app: App) {
  const store = createPinia();
  store.use(piniaPluginPersist)
  app.use(store);
}


export * from './them'
export * from './login'
export * from './Layout'