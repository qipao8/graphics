import Cookies from "js-cookie"
const Token = "token",
  userKey = "userKey",
  permissionKey = "permissionKey"
export function getUserInfo() {
  return Cookies.get(userKey)
}
export function setUserInfo(userInfo) {
  Cookies.set(userKey, JSON.stringify(userInfo), { expires: 15 })
}
export function getToken() {
  return Cookies.get(Token)
}
export function setToken(token) {
  Cookies.set(Token, JSON.stringify(token), { expires: 15 })
}
export function getPermission() {
  return Cookies.get(permissionKey)
}
export function setPermission(permissionKey) {
  Cookies.set(Token, JSON.stringify(permissionKey), { expires: 15 })
}
