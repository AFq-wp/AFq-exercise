<template>
  <div class="relative Box w-100vw h-100vh dark:(bg-dark-50) bg-[rgb(96,143,159)]">
    <ChangeDark :size="35" :depth="1"></ChangeDark>
    <div
      class="w-400px h-400px absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] p-[20px] text-[#000] bg-[rgb(117,121,71)] dark:(text-[#fff] bg-[rgb(114,83,52)]) rounded-[20px] flex-y-center"
    >
      <div class="flex flex-row justify-center mb-[15px]">
        <img src="@/assets/img/logo.png" alt="" class="w-[100px] h-[100px] rounded-1/2" />
      </div>
      <header class="header mb-[20px]">账号密码登录</header>
      <n-form ref="formRef" :model="formValue" label-placement="left" :size="size" :rules="rules" style="width: 100%" :show-label="false">
        <n-form-item label="姓名:" path="user.name">
          <n-input v-model:value="formValue.user.name" placeholder="输入姓名" round />
        </n-form-item>
        <n-form-item label="密码:" path="user.password">
          <n-input type="password" show-password-on="click" placeholder="输入密码" :maxlength="8" v-model:value="formValue.user.password" round />
        </n-form-item>
        <n-form-item label="">
          <n-button type="info" round block @click="handleValidateClick">确定</n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { FormInst, FormItemInst, FormItemRule, FormRules, useMessage } from 'naive-ui'
import { LoginStore } from '@/store'
import { rule } from '@/utils'
import ChangeDark from '@/components/ChnageDark/index.vue'
name: 'Login'

interface FormData {
  user: {
    name: string
    password: string
  }
}
window.$message = useMessage()
const router = useRouter()
const LoginPinia = LoginStore()
const formRef = ref<FormInst | null>(null)
const formValue: FormData = reactive({
  user: {
    name: '2430739179',
    password: 'Wp1997&'
  }
})
const size = ref<'small' | 'medium' | 'large'>('medium')
const rules: FormRules = {
  user: {
    name: rule.name,
    password: rule.password
  }
}
//  点击登录
const handleValidateClick = (e: MouseEvent) => {
  e.preventDefault()
  formRef.value?.validate(errors => {
    if (!errors) {
      window.$message.success('登录成功')
      LoginPinia.isLogin = true
      router.push('/dashboard')
    } else {
      console.log(errors)
      window.$message.error('登录失败')
    }
  })
}
</script>

<style scoped></style>
