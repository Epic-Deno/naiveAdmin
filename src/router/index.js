/*
 * @Description: 路由的主入口
 * @Author: 逍遥子
 * @Date: 2021-11-04 22:48:28
 * @LastEditors: Pony
 * @LastEditTime: 2021-11-04 23:07:30
 * @FilePath: /naiveAdmin/src/router/index.js
 */
import { createWebHistory, createRouter } from 'vue-router'
import routes from './routes.config'

export default createRouter({
    history: createWebHistory(),
    routes
})