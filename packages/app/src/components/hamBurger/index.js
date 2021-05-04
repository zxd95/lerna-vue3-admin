import hamBurger from "./src/hamBurger.vue"

export const HamBurger = Object.assign(hamBurger, {
  install(app) {
    app.component(hamBurger.name, hamBurger)
  },
})

export default HamBurger
