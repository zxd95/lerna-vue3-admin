<template>
  <div>
    <template
      v-if="hasOneShowingChild(item.children, item) &&
      (!onlyOneChild.children || onlyOneChild.noShowingChildren)"
    >
      <menu-link v-if="onlyOneChild.meta" :to="onlyOneChild.path">
        <el-menu-item :index="onlyOneChild.path" :class="{ 'submenu-title-noDropdown': !isNest }">
          <i :class="onlyOneChild.meta.icon || (item.meta && item.meta.icon)" />
          <template #title>
            <span>{{ onlyOneChild.meta.title }}</span>
          </template>
        </el-menu-item>
      </menu-link>
    </template>
    <!-- 递归组件 -->
    <el-submenu v-else :index="item.path" popper-append-to-body>
      <template #title>
        <i :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :isNest="true"
        :item="child"
        :base-path="child.path"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import { ref } from "vue"
import menuLink from "./menuLink.vue"

export default {
  name: "sidebarItem",
  components: { menuLink },
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ""
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const onlyOneChild = ref({})

    const hasOneShowingChild = (children = [], parent) => {
      const showChildren = children.filter(item => {
        onlyOneChild.value = item
        return true
      })

      if (showChildren.length === 1) {
        return true
      }

      if (showChildren.length === 0) {
        onlyOneChild.value = { ...parent, noShowingChildren: true }
        return true
      }
      return false
    }

    return {
      onlyOneChild,
      hasOneShowingChild
    }
  }
}
</script>
