import Cookie from "js-cookie"

// 获取
function getCookie(key) {
  return Cookie.get(key)
}

// 存储
function setCookie(key, value) {
  Cookie.set(key, value)
}

// 清空
function clearCookie(key) {
  debugger
  Cookie.remove(key)
}

export { getCookie, setCookie, clearCookie }
