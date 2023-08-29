// fetch请求使用记录
const baseUrl = "https://shiny-fiesta-65qwr4vv7gwfr7pq-4000.app.github.dev"
export function postUserLogin(params) {
  fetch(baseUrl + "/api/postLogin", {
    method: "POST",
    body: JSON.stringify(params),
    mode: "cors",
    headers: {
        "content-type": "application/json",
        'Access-Control-Allow-Origin': '*'
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
      'Access-Control-Allow-Origin': '*'
    },
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res)
    })
}
