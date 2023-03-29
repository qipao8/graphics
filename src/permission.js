import { getUserInfo, getToken } from "./util/auth"

const userKey = getUserInfo(),
  Token = getToken()
if (!userKey || !Token) {
  location.replace(location.origin + "/#/login")
}
