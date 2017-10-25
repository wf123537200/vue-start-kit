<template>
  <div>
    <div class="text" v-html="msg">
    </div>
  </div>
</template>

<script>
  import marked from 'marked';

  const content = `【通知 统一校验】
    1、入口 src/main.js:27
    2、具体的处理函数写在 src/services/error.js
    3、使用时可以用 window.Alert(msg) 来调用
    4、ajax校验可以 参看 [ajax和mock]
  `

  export default {
    name: 'error',
    data () {
      return {
        msg: marked(content)
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
