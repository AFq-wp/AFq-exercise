<template>
  <div class="relative Box w-100vw h-100vh dark:bg-dark-50">
    <div
      class="w-400px h-400px absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] pr-[20px] pt-[20px] text-[#000] dark:text-[#fff]"
    >
      <div class="flex flex-row justify-center mb-[15px]">
        <img
          src="@/assets/img/logo.png"
          alt=""
          class="w-[100px] h-[100px] rounded-1/2"
        />
      </div>
      <n-form
        ref="formRef"
        :model="formValue"
        label-placement="left"
        :size="size"
      >
        <n-form-item label="姓名:" path="user.name">
          <n-input
            v-model:value="formValue.user.name"
            placeholder="输入姓名"
            round
          />
        </n-form-item>
        <n-form-item label="密码:" path="user.name">
          <n-input
            type="password"
            show-password-on="click"
            placeholder="密码"
            :maxlength="8"
            v-model:value="formValue.user.password"
            round
          />
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
name: 'Login';
const router = useRouter();
const formValue = reactive({
  user: {
    name: 'oop',
        password: '11111',
  },
});
const size = ref<'small' | 'medium' | 'large'>('medium');
</script>

<style scoped>
/* .Box {
  background: url('@/assets/img/Bgc.JPG') no-repeat center center;
  background-size: 100% 100%;
} */
</style>
