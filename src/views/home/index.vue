<template>
  <div class="bg-white dark:bg-dark-300 dark:text-light-300 w-100vw h-100vh">
    我是首页
    <button
      class=" bg-indigo-300 w-100px h-100px rounded-20px transition transform dark:bg-dark-100 dark:text-light-900  hover:(scale-110 duration-200 bg-amber-100 text-dark-100 ) "
      @click="checkDark">切换模式</button>
    <button
      class=" bg-indigo-300 w-100px h-100px rounded-20px transition transform dark:bg-dark-100 dark:text-light-900  hover:(scale-110 bg-amber-100 text-dark-100 ) "
      @click="Gologin">跳转页面</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { themeStore } from '@/store/them'
import { AddThemDark } from '@/utils/Session'

const router = useRouter()
const them = themeStore()

let flag = ref<boolean>(false)

const checkDark = () => {
  flag.value = !flag.value
  const DARK_CLASS = 'dark';
  if (flag.value === false) {
    document.documentElement.classList.remove(DARK_CLASS);
    them.isDark = false
    AddThemDark(`${flag.value}`)

  } else {
    document.documentElement.classList.add(DARK_CLASS);
    them.isDark = true
    AddThemDark(`${flag.value}`)

  }
}

const Gologin = () => {
  router.push('/login')
}
</script>

<style scoped>
</style>