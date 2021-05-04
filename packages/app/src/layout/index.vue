<template>
  <div class="app-wrapper">
    <div>
      <!-- 侧边栏 -->
      <sidebar class="sidebar-container"></sidebar>
      <!-- 主体内容栏 -->
      <div class="main-container">
        <!-- 顶部导航栏 -->
        <navbar></navbar>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "./components/sidebar/index.vue"
import navbar from "./components/navbar/index.vue"

export default {
  name: "layout",
  components: {
    sidebar,
    navbar
  },
  setup(props) {
  }
}
</script>

<style>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
