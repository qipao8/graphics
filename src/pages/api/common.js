// fetch请求使用记录
const baseUrl = "http://127.0.0.1:4000"
export function postUserLogin(params) {
  fetch(baseUrl + "/api/postLogin", {
    method: "POST",
    body: JSON.stringify(params),
    mode: "cors",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res)
    })
  fetch(baseUrl + "/api/getJSON", {
    method: "POST",
    body: JSON.stringify(params),
    mode: "cors",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res)
    })
}
