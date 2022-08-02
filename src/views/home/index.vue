<template>
  <div class="bg-white dark:bg-dark-300 dark:text-light-300 w-100vw h-100vh">
    我是首页
    <button
      class="bg-indigo-300 w-100px h-100px rounded-20px transition transform dark:bg-dark-100 dark:text-light-900 hover:(scale-110 duration-200 bg-amber-100 text-dark-100 )"
      @click="checkDark"
    >
      切换模式
    </button>
    <button
      class="bg-indigo-300 w-100px h-100px rounded-20px transition transform dark:bg-dark-100 dark:text-light-900 hover:(scale-110 bg-amber-100 text-dark-100 )"
      @click="Gologin"
    >
      跳转页面
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { themeStore } from '@/store/them'

const router = useRouter()
const themPinia = themeStore()
// 切换主题颜色
const checkDark = () => {
  themPinia.isDark = !themPinia.isDark
}

const Gologin = () => {
  router.push('/login')
}
</script>

<style scoped></style>
