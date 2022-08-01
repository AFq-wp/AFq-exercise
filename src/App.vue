<template>
  <!--这里必须吧这个message组件放在这里 不然是不生效的-->
  <n-message-provider>
    <n-config-provider :theme="them.darkThem">
      <router-view></router-view>
    </n-config-provider>
  </n-message-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, darkTheme, zhCN, dateZhCN } from 'naive-ui'
import { themeStore } from '@/store'
const them = themeStore()
let flag = JSON.parse(sessionStorage.getItem('themDark') as string)
switch (flag) {
  case true:
    document.documentElement.classList.add('dark')
    break
  case false:
    document.documentElement.classList.remove('dark')
    break
  default:
    break
}
</script>

<style scoped></style>
