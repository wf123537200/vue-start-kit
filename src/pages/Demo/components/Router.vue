<template>
  <div>
    <div class="text" v-html="msg">
    </div>
  </div>
</template>

<script>
  import marked from 'marked';

  const content = `【路由配置】
    1、路由配置文件为 src/router/index.js 中
    2、具体配置方法可以参见 [router](http://router.vuejs.org/)
  `

  export default {
    name: 'router',
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
