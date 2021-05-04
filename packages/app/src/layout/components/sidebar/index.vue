<template>
  <div>
    <logo></logo>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        mode="vertical"
        unique-opened
        :collapse="isCollapse"
        :default-active="activeMenu"
        @select="onMenuSelect"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        ></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { computed } from "vue"
import { useRouter, useRoute } from "vue-router"
import { useStore } from "vuex"
import logo from "./logo.vue"
import sidebarItem from "./sidebarItem.vue"

export default {
  name: "sidebar",
  components: {
    logo,
    sidebarItem
  },
  setup() {
    const router = useRouter().options.routes
    
    const route = useRoute()

    const store = useStore()

    const activeMenu = computed(() => {
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    })

    const onMenuSelect = (indexPath) => {
      // debugger
    }

    const increaseIndexes = (val) => {
      return Object.keys(val)
        .map((v) => {
          return {
            ...val[v],
            key: v
          }
        })
        .filter((v) => v.meta && v.meta.showLink)
    }

    return {
      routes: computed(() => increaseIndexes(router)),
      activeMenu,
      isCollapse: computed(() => !store.getters.sidebar.opened),
      onMenuSelect,
      increaseIndexes
    }
  }
}
</script>
