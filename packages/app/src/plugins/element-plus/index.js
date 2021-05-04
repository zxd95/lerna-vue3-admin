import {
  ElAffix,
  ElSkeleton,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElScrollbar,
  ElSubmenu,
  ElButton,
  ElCol,
  ElRow,
  ElSpace,
  ElDivider,
  ElCard,
  ElDropdown,
  ElDialog,
  ElMenu,
  ElMenuItem,
  ElDropdownItem,
  ElDropdownMenu,
  ElIcon,
  ElInput,
  ElForm,
  ElFormItem,
  ElLoading,
  ElPopover,
  ElPopper,
  ElTooltip
} from "element-plus"

const components = [
  ElAffix,
  ElSkeleton,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElScrollbar,
  ElSubmenu,
  ElButton,
  ElCol,
  ElRow,
  ElSpace,
  ElDivider,
  ElCard,
  ElDropdown,
  ElDialog,
  ElMenu,
  ElMenuItem,
  ElDropdownItem,
  ElDropdownMenu,
  ElIcon,
  ElInput,
  ElForm,
  ElFormItem,
  ElPopover,
  ElPopper,
  ElTooltip
]

const plugins = [ElLoading]

export function useElementPlus(app) {
  console.log('app', app)
  components.forEach((component) => {
    app.component(component.name, component)
  })
  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}
