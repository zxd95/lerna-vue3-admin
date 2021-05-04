import breadCrumb from "./src/breadCrumb.vue"

export const BreadCrumb = Object.assign(breadCrumb, {
  install(app) {
    app.component(breadCrumb.name, breadCrumb)
  },
})

export default BreadCrumb
