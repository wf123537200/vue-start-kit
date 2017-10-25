<template>
  <div>
    <div class="text" v-html="msg"></div>
  </div>
</template>

<script>
  import marked from 'marked';

  const content = `【表单校验】
    1、使用element ui 校验
    2、使用方法，可以参看[表单验证](http://router.vuejs.org/)
  `

  export default{
    name: 'valid',
    data() {
      return {
        msg: marked(content)
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .text {
    white-space: pre;
    text-align: left;
  }
</style>
