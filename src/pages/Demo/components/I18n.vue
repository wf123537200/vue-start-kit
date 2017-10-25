<template>
  <div>
    <div class="text" v-html="msg">
    </div>
    <div>
      i18n 输出 示例：{{i18n}}
    </div>
  </div>
</template>

<script>
  import marked from 'marked';

  const content = `【i18n】
    1、相关代码写在 /static/i18n 目录下
    2、不同的目录中写不同的language
    3、zh，en为例子，可以使用 index.json 作为配置文件，后续也可考虑拆分
    4、请求成功后使用 window.I18n，可以从中获取相应的i18n，具体例子见 Demo/components/I18n.vue:27
    5、凡有需要使用字符的地方，都用变量替换
  `

  export default {
    name: 'i18n',
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
