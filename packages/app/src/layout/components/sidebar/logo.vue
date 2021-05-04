<template>
  <div class="sidebar-logo-container">
    <h1 class="sidebar-title">Logo</h1>
  </div>
</template>

<script>
export default {
  name: "logo"
}
</script>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  .sidebar-title {
    display: inline-block;
    margin: 0;
    line-height: 50px;
    font-size: 20px;
    color: #fff;
  }
}
</style>
