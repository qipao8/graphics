const Koa = require("koa"),
  app = new Koa(),
  Router = require("koa-router"),
  bodyParser = require("koa-bodyparser"),
  cors = require("koa2-cors")

// 子路由
const home = new Router()

const { ApiArrayObj } = require("./api")

Object.keys(ApiArrayObj).forEach((method) => {
  ApiArrayObj[method].forEach((func) => {
    home[method](
      "/" + func.name || func.toString().match(/function\s*([^(]*)\(/)[1],
      async (ctx) => {
        let data =
          method === "post"
            ? await func(ctx.request.body)
            : await func(ctx.request.query)
        ctx.body = data
      }
    )
  })
})

// 装载所有子路由
let router = new Router()
router.use("/api", home.routes(), home.allowedMethods())

// 加载路由中间件
app.use(cors())
app.use(bodyParser())
app.use(router.routes()).use(router.allowedMethods())

app.listen(4000, () => console.log("服务启动在端口4000..."))
