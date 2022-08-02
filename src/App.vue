<template>
  <n-message-provider>
    <n-config-provider :theme="themPinia.darkThem" :locale="zhCN" :date-locale="dateZhCN">
      <router-view></router-view>
    </n-config-provider>
  </n-message-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, darkTheme, zhCN, dateZhCN } from 'naive-ui'
import { themeStore } from '@/store'
const themPinia = themeStore()
</script>

<style scoped></style>
