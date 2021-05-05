<template>
  <div class="navbar">
    <hamburger :isActive="sidebar.opened" class="hamburger-container" @toggleClick="toggleSidebar" />
    <!-- 面包屑 -->
    <bread-crumb class="breadcrumb-container" />
    <div class="right-contaniner">
      <!-- 个人信息 -->
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <img /><i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="onLogout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex"
import { useRouter } from "vue-router"
import { useMapGetters } from "../../../hooks/useMapGetters"
import hamburger from "../../../components/hamburger"
import breadCrumb from "../../../components/breadCrumb"
import { clearCookie } from "../../../utils/cookie"

export default {
  name: "navbar",
  components: {
    hamburger,
    breadCrumb
  },
  setup() {
    const store = useStore()

    const router = useRouter()
    
    const toggleSidebar = () => {
      store.dispatch("app/toggleSideBar")
    }

    const onLogout = () => {
      clearCookie("info")
      router.push("/login")
    }

    return {
      ...useMapGetters(["sidebar"]),
      toggleSidebar,
      onLogout
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 50px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-contaniner {
    position: absolute;
    right: 0;
    display: flex;
    align-content: center;
    height: 50px;

    .el-dropdown-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 100%;
      margin-right: 10px;
      cursor: pointer;

      img {
        width: 24px;
        height: 24px;
        background: #000;
        border-radius: 22px;
      }
    }
  }
}
// single element-plus reset
.el-dropdown-menu {
  padding: 0;
}

.el-dropdown-menu__item {
  padding: 0 10px;
}

.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  color: #606266;
  background: #f0f0f0;
}
</style>
