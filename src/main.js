/*
 * @Description: Created By 逍遥子
 * @Author: 逍遥子
 * @Date: 2021-11-04 22:12:58
 * @LastEditors: Pony
 * @LastEditTime: 2021-11-04 23:07:59
 * @FilePath: /naiveAdmin/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';

createApp(App).use(router).use(store).use(Antd).mount('#app')
