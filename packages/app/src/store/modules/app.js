import { setCookie } from "../../utils/cookie"

const state = {
  sidebar: {
    opened: true
  },
  device: "desktop"
}

const mutations = {
  TOGGLE_SIDEBAR: (state) => {
    state.sidebar.opened = !state.sidebar.opened
    if (state.sidebar.opened) {
      setCookie("sidebarStatus", 1)
    } else {
      setCookie("sidebarStatus", 0)
    }
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit("TOGGLE_SIDEBAR")
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
