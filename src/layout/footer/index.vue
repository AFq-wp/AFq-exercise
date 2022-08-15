<template>
  <div
    class="bg-white text-[#333639] dark:bg-[#18181c] dark:text-white dark:text-opacity-82 transition-all duration-300 ease-in-out flex-x-center h-full"
  >
    {{ info }}
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, defineProps } from 'vue'
name: 'Footer'
type Props = {
  info: string
}

withDefaults(defineProps<Props>(), {
  info: 'AFq'
})
</script>

<style scoped></style>
