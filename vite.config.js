/*
 * @Description: vite配置
 * @Author: 逍遥子
 * @Date: 2021-11-04 22:12:58
 * @LastEditors: Pony
 * @LastEditTime: 2021-11-04 22:42:10
 * @FilePath: /naiveAdmin/vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') }
    ]
  }
})
