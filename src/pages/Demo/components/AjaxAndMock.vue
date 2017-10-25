<template>
  <div>
    <div class="text" v-html="msg">
    </div>
  </div>
</template>

<script>
  import marked from 'marked';

  const content = `【ajax 接口写法】
    1、都写在 interface.js 文件中
    2、接口都用常量，可以配置所有接口前缀，例如 '/api/'
    3、其中 src/interface.js 为项目公共请求部分，例子可见：src/interface.js
    4、其中 src/pages/interface.js 为页面请求部分
    5、调用方式 可以参见 src/main.js:25
    6、可以参看 [axios](https://github.com/axios/axios)

    【ajax 统一接口文件】
    1、可以参见此文件 src/services/ajax.js
    2、以上文件可以进行
        a）接口统一错误处理
        b）http code 统一处理
    3、如有其它操作可以修改此文件

    【Mock 使用】
    1、mock 的 init 函数在 src/main.js:14
    2、拦截条件 现为 loaclhost 域名，使用时可以修改
    3、mock 可以拦截 给定的 reg 的 url，返回参数
    4、例子可见 src/mock/index.js
    5、可以参看 [mock](http://mockjs.com)
  `

  export default {
    name: 'ajaxAndMock',
    data () {
      return {
        msg: marked(content),
        i18n: window.I18n.msg
      }
    }
  }
</script>

<style scoped>
  .text {
    white-space: pre;
    text-align: left;
  }
</style>
