<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
export default {
  name: "menuLink",
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup() {
    const linkProps = (to) => {
      return {
        to: to
      }
    }
    return {
      type: "router-link",
      linkProps
    }
  }
}
</script>
