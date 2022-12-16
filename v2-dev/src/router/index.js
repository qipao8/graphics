import Vue from "vue"
import VueRouter from "vue-router"

const Home = () => import(/* webpackChunkName: "Home" */`../pages/Home.vue`)
const Login = () => import(/* webpackChunkName: "UserLogin" */`../pages/User/Login.vue`)

Vue.use(VueRouter)

const constantRoutes = [{
    path: "/",
    name: "home",
    component: Home
}, {
    path: "/login",
    name: "login",
    component: Login
}, {
    path: "/404",
    component: () => import("@/pages/404"),
    hidden: true
}, {
    path: "*",
    redirect: "/404",
    hidden: true
}]

const router = new VueRouter({
    routes: constantRoutes
})

export default router