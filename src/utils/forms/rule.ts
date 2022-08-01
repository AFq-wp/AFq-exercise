
import type { FormItemRule } from 'naive-ui';

interface FormRule {
  name: FormItemRule[],
  password:FormItemRule[]
}


export const rule: FormRule = {
  name:[
    {
      required: true,
      message: "请输入账号", // 这里就是当前字段为空时 会
    },
    {
      pattern: /^[1-9][0-9]{4,10}$/,
      message: "请输入正确的账号格式",   // QQ号
      trigger: ["blur"],
    },
  ],
  password: [
    {
      required: true,
      message:'请输入密码',
    },
    {
      pattern: /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
      message: '请输入正确的密码格式',
      trigger:['blur','input']
    }
  ]
}


