import { computed } from "vue"
import { useStore } from "vuex"

export function useMapGetters(keys) {
  const res = {}
  const { getters } = useStore()
  
  keys.map(key => {
    if (Reflect.has(getters, key)) {
      res[key] = computed(() => getters[key])
    }
  })
  return res
}