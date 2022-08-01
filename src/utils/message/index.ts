import { useMessage } from 'naive-ui'
const message = useMessage()
export const Warning = (info: string) => {
  message.warning(info)
}

export const Success = (info: string) => {
  message.success(info)
}

export const Error = (info: string) => {
  message.error(info)
}

export const Loading = (info: string) => {
  message.loading(info)
}






