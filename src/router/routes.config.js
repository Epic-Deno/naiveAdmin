/*
 * @Description: 路由菜单
 * @Author: 逍遥子
 * @Date: 2021-11-04 22:49:49
 * @LastEditors: Pony
 * @LastEditTime: 2021-11-04 23:06:28
 * @FilePath: /naiveAdmin/src/router/routes.config.js
 */

const routes = [
    { path: '/', name: 'home', component: () => import('@/views/home.vue') }
]

export default routes