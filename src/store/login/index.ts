import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'


//  login登录后处理模块
export const LoginStore = defineStore(
  'Login',
  () => {
    const isLogin = ref<boolean>(false)
    return { isLogin }
  },
  {
    persist: {
      enabled: true,
      strategies: [{
        storage: window.sessionStorage
      }]
    },
  }
)
