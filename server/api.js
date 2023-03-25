const fs = require("fs")
const path = require("path")
const test = (data) => {
  return new Promise((resolve, reject) => {
    data
      ? resolve({ code: 0, message: "ok", data: data })
      : reject({ code: -1, message: "error", data: false })
  })
}
const getJSON = (params) =>
  new Promise((resolve, reject) => {
    console.log(params)
    fs.readFile(path.join(__dirname, "JSON/1.json"), "utf-8", (err, data) => {
      err
        ? console.log(err)
        : data
        ? resolve({ code: 0, message: "", data: JSON.parse(data) })
        : reject({ code: -1, message: err, data: null })
    })
  })
const ApiArrayObj = {
  get: [test],
  post: [test, getJSON],
}
module.exports = { ApiArrayObj }
