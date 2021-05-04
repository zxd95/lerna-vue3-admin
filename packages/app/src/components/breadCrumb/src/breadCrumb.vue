<template>
  <el-breadcrumb separator="/">
    <transition-group appear name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in bcList" :key="index">
        <span
          v-if="item.redirect === 'noRedirect' || index === bcList.length - 1"
          class="no-redirect"
        >
          {{ item.meta.title }}
        </span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { ref, watch} from "vue"
import { useRouter, useRoute } from "vue-router"

export default {
  name: "breadCrumb",
  setup() {
    const bcList = ref([])
    const route = useRoute()
    const router = useRouter()

    const isDashboard = (route) => {
      const name = route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === "home".toLocaleLowerCase()
    }

    const getBreadcrumb = () => {
      let matched = route.matched.filter(item => item.meta && item.meta.title)
      if (!isDashboard(matched[0])) {
        matched = [
          {
            path: "/home",
            meta: {
              title: "首页"
            }
          }
        ].concat(matched)
      }
      bcList.value = matched.filter(item => item.meta && item.meta.title)
    }
    getBreadcrumb()

    watch(
      () => route.path,
      () => getBreadcrumb()
    )
  
    const handleLink = (item) => {
      const { redirect, path } = item
      if (redirect) {
        router.push(redirect.toString())
      }
      router.push(path)
    }

    return {
      bcList,
      handleLink
    }
  }
}
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  line-height: 50px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
