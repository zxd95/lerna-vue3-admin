<template>
  <div :class="classes" class="app-wrapper">
    <!-- 侧边栏 -->
    <sidebar class="sidebar-container"></sidebar>
    <!-- 主体内容栏 -->
    <div class="main-container">
      <!-- 顶部导航栏 -->
      <navbar></navbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from "vue"
import { useStore } from "vuex"
import sidebar from "./components/sidebar/index.vue"
import navbar from "./components/navbar/index.vue"

export default {
  name: "layout",
  components: {
    sidebar,
    navbar
  },
  setup() {
    const store = useStore()

    const state = reactive({
      sidebar: computed(() => store.state.app.sidebar),
      classes: computed(() => {
        return {
          hideSidebar: !state.sidebar.opened,
          openSidebar: state.sidebar.opened
        }
      })
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
