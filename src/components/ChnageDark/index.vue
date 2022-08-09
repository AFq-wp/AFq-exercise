<template>
  <button class="w-[100%] pr-[20px] pt-[20px] flex justify-end" @click="checkDark">
    <n-icon :size="size" :depth="depth" :component="Sunny" v-show="isDark === true"></n-icon>
    <n-icon :size="size" :depth="depth" :component="Moon" v-show="isDark === false"></n-icon>
  </button>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps } from 'vue'
import { Sunny, Moon } from '@vicons/ionicons5'
import { LoginStore, themeStore } from '@/store'
import { storeToRefs } from 'pinia'
name: 'ChangeDark'
type Props = {
  size: number
  depth?: number
}
// 这里就是可以给传入的值进行一个初始值的设置
withDefaults(defineProps<Props>(), {
  size: 30,
  depth: 1
})

const themPinia = themeStore()
const { isDark } = storeToRefs(themPinia) // 这里必须使用这个解构出来 不然解构出来的变量就会是去响应式
const checkDark = () => {
  themPinia.isDark = !themPinia.isDark
}
</script>

<style scoped></style>
