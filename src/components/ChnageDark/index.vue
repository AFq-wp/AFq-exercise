<template>
  <button class="w-[100%] pr-[20px] pt-[20px] flex justify-end" @click="checkDark">
    <n-icon size="40" :depth="1" :component="Sunny" v-show="isDark === true"></n-icon>
    <n-icon size="40" :depth="1" :component="Moon" v-show="isDark === false"></n-icon>
  </button>
</template>

<script setup lang="ts">
import {} from 'vue'
import { Sunny, Moon } from '@vicons/ionicons5'
import { LoginStore, themeStore } from '@/store'
import { storeToRefs } from 'pinia'
name: 'ChangeDark'

const themPinia = themeStore()
const { isDark } = storeToRefs(themPinia)
const checkDark = () => {
  themPinia.isDark = !themPinia.isDark
}
</script>

<style scoped></style>
