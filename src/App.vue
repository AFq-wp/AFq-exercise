

<template>
  <n-config-provider :theme="them.darkThem">
    <router-view></router-view>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, darkTheme, zhCN, dateZhCN } from 'naive-ui'
import { themeStore } from '@/store'
const them = themeStore()
let flag = JSON.parse(sessionStorage.getItem('themDark') as string)
switch (flag) {
  case true:
    document.documentElement.classList.add('dark')
    break;
  case false:
    document.documentElement.classList.remove('dark')
    break;
  default:
    break;
}

</script>

<style scoped>
</style>
