import { defineStore } from 'pinia'
import { ref } from 'vue'
export const LayoutStore = defineStore(
  'Layout',
  () => {
    /** 布局模式 */
    const mode = ref<'vertical' | 'horizontal'>('vertical')
    /** 头部可见 */
    const headerVisible = ref<boolean>(true)
    /** 侧边栏折叠状态 */
    const siderCollapse = ref<boolean>(false)
    /** 最小宽度 */
    const minWidth = ref<number>()
    /** 头部高度 */
    const headerHeight = ref<number>()
    /** 固定头部和标签 */
    const fixedHeaderAndTab = ref<boolean>(true)
    /** 固定底部 */
    const fixedFooter = ref<boolean>(false)
    /** 传递给footer组件的信息 */
    const info = ref<string>('Copyright ©2022 AFq')
    return {
      mode,
      headerVisible,
      siderCollapse,
      minWidth,
      fixedHeaderAndTab,
      fixedFooter,
      info
    }
  },
  {
    persist: {
      enabled: true,
      strategies: [{
        storage: window.sessionStorage
      }]
    },
  }
)