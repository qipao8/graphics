const fs = require("fs")
const path = require("path")
const test = (data) => {
  return new Promise((resolve, reject) => {
    data
      ? resolve({ code: 0, message: "ok", data: data })
      : reject({ code: -1, message: "error", data: false })
  })
}
const getJSON = () =>
  new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, "JSON/1.json"), "utf-8", (err, data) => {
      err
        ? console.log(err)
        : data
        ? resolve({ code: 0, message: "", data: JSON.parse(data) })
        : reject({ code: -1, message: err, data: null })
    })
  })
const postLogin = (params) =>
  new Promise((resolve, reject) => {
    let { accout, password } = params
    fs.readFile(
      path.join(__dirname, "JSON/user.json"),
      "utf-8",
      (err, data) => {
        if (err) console.log(err)
        else {
          if (data) {
            const userMap = new Map(JSON.parse(data))
            if (userMap.has(accout) && userMap.get(accout) === password)
              resolve({ code: 0, message: "密码正确", data: "success" })
            else resolve({ code: 0, message: "密码错误", data: "error" })
          } else reject({ code: -1, message: "数据库错误", data: null })
        }
      }
    )
  })
const ApiArrayObj = {
  get: [test],
  post: [test, getJSON, postLogin],
}
module.exports = { ApiArrayObj }
