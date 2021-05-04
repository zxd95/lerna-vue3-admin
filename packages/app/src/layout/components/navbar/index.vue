<template>
  <div class="navbar">
    <hamburger class="hamburger-container" @toggleClick="toggleSidebar" />
    <!-- 面包屑 -->
    <bread-crumb class="breadcrumb-container" />
  </div>
</template>

<script>
import hamburger from '../../../components/hamburger'
import breadCrumb from '../../../components/breadCrumb'

export default {
  name: "navbar",
  components: {
    hamburger,
    breadCrumb
  },
  setup() {
    const toggleSidebar = () => {}

    return {
      toggleSidebar
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
}
</style>
