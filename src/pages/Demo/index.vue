<template>
  <el-tabs v-model="activeName">
    <el-tab-pane label="目录" name="menu">
      <Menu></Menu>
    </el-tab-pane>
    <el-tab-pane label="i18n" name="i18n">
      <I18n></I18n>
    </el-tab-pane>
    <el-tab-pane label="ajax和mock" name="ajaxAndMock">
      <AjaxAndMock></AjaxAndMock>
    </el-tab-pane>
    <el-tab-pane label="校验" name="valid">
      <Valid></Valid>
    </el-tab-pane>
    <el-tab-pane label="异常处理" name="error">
      <Error></Error>
    </el-tab-pane>
    <el-tab-pane label="路由配置" name="router">
      <Router></Router>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import Menu from './components/Menu'
  import I18n from './components/I18n'
  import AjaxAndMock from './components/AjaxAndMock'
  import Router from './components/Router'
  import Error from './components/Error'
  import Valid from './components/Valid'

  export default {
    components: {
      Menu,
      I18n,
      AjaxAndMock,
      Router,
      Error,
      Valid
    },
    data() {
      return {
        activeName: 'menu'
      };
    },
    methods: {
    }
  };
</script>

<style scoped>

</style>
