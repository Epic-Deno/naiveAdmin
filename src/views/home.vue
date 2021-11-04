<!--
 * @Description: 主入口
 * @Author: 逍遥子
 * @Date: 2021-11-04 22:54:53
 * @LastEditors: Pony
 * @LastEditTime: 2021-11-04 23:14:09
 * @FilePath: /naiveAdmin/src/views/home.vue
-->
<template>
  <p>我是主页面</p>
  <a-card hoverable style="width: 300px">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </template>
    <template class="ant-card-actions" #actions>
      <setting-outlined key="setting" />
      <edit-outlined key="edit" />
      <ellipsis-outlined key="ellipsis" />
    </template>
    <a-card-meta title="Card title" description="This is the description">
      <template #avatar>
        <a-avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      </template>
    </a-card-meta>
  </a-card>
</template>

<script setup>
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
</script>

<style lang="scss" scoped>
</style>