import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { darkTheme } from 'naive-ui';

export const themeStore = defineStore('theme', () => {
  let flag = JSON.parse(sessionStorage.getItem('themDark') as any);
  const isDark = ref<boolean>(flag === undefined ? false : flag);
  const darkThem = computed(() => (isDark.value ? darkTheme : undefined));

  return {
    isDark,
    darkThem
  };
});
