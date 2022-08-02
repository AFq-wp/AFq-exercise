import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { darkTheme } from 'naive-ui';

export const themeStore = defineStore(
  'theme',  // 这里是id
  () => {
    const isDark = ref<boolean>(false)
    const darkThem = computed(() => isDark.value ? darkTheme : undefined)
    //通过监听 isDark 来判断当前是什么主题模式
    watch(isDark, (newValue) => {
      if (newValue === true) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

    })
    return { isDark, darkThem }
  },
  {
    // 开启持久化
    persist: {
      enabled: true
    },
  },
)