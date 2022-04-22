import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/:catchAll(.*)",
        redirect: "index"
    },
    {
        path: '/index',
        name: 'index',
        component: () => import("@/components/home/index.vue")
    }
]

export default createRouter({
    // createWebHashHistory (hash路由 Hash模式 #)
    // createWebHistory (history路由 HTML5 模式 推荐，需要服务器配置支持)
    // createMemoryHistory 带缓存 history 路由
    history: createWebHistory(),
    routes
})
