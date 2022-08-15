<template>
  <SoybeanAdminLayout
    :mode="mode"
    :headerVisible="headerVisible"
    :siderCollapse="siderCollapse"
    :fixedHeaderAndTab="fixedHeaderAndTab"
    :fixedFooter="fixedFooter"
  >
    <template #header>
      <Header></Header>
    </template>
    <template #tab>
      <Tab></Tab>
    </template>
    <template #sider>
      <Side></Side>
    </template>
    <Details></Details>
    <template #footer>
      <Footer :info="info" />
    </template>
  </SoybeanAdminLayout>
</template>
<script setup lang="ts">
import SoybeanAdminLayout from 'soybean-admin-layout'
import { h, defineComponent, ref, Component, reactive } from 'vue'
import { LayoutStore } from '@/store'
import { storeToRefs } from 'pinia'
import Footer from '@/layout/footer/index.vue'
import Details from '@/layout/details/index.vue'
import Header from '@/layout/header/index.vue'
import Tab from '@/layout/tab/index.vue'
import Side from '@/layout/menuSder/index.vue'
name: 'AFqLayout'
const LayoutStorePinia = LayoutStore()
const { mode, headerVisible, siderCollapse, fixedHeaderAndTab, fixedFooter, info } = storeToRefs(LayoutStorePinia)
</script>

<style scoped></style>
