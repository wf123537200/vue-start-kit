<template>
  <div>
    <div>
      <pre>
      .
      ├── build                       // 项目build脚本，可以关闭eslint
      ├── config                      // 项目配置目录
      ├── dist                        // 部署目录，npm run build后生成
      ├── dist                        // 项目输出部署目录，执行 npm run build得到
      ├── src                         // 生产目录
      │   ├── assets                  // 静态资源，包含图片等
      │   ├── components              // 项目公用组件，包含Header等
      │   ├── mock                    // 接口mock文件目录
      │       └── index.js            // mock接口集合文件
      │   ├── pages                   // 页面目录
      │   │   ├── Demo                // demo页面，必须用大写开头
      │   │   │   ├── components      // 页面专用组件
      │   │   │   ├── style           // 页面专用sass
      │   │   │   ├── services        // 页面服务，可以包含相应方法类
      │   │   │   ├── interface.js    // 页面接口结合文件
      │   │   │   └── index.vue       // 页面入口
      │   │   └── Other               // 其他页面目录
      │   ├── router                  // 路由配置文件，如果路由太多了，可以拆分
      │   ├── services                // 项目公用服务
      │   ├── App.vue                 // 组件入口
      │   ├── config.js               // 项目配置文件
      │   ├── interface.js            // 项目接口文件
      │   └── main.js                 // Webpack 预编译入口
      ├── style                       // 项目公用style
      ├── static                      // 静态文件目录，保留
      │   └── i18n                    // 国际化目录，每一个目录为一种语言
      │       ├── zh                  // 中文目录
      │       │   └── index.json      // 配置文件
      │       └── en                  // 英文目录
      ├── index.html                  // 项目入口文件，一般不用改动
      ├── package.json                // 项目配置
      ├── README.md                   // 项目说明
      ├── CHANGE_LOG.md               // 项目更新历史文档
      └── test                        // 测试目录
      </pre>
    </div>
    router 测试： <router-link to="/page1">到page1</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    data () {
      return {}
    }
  }
</script>

<style scoped>
  pre {
    text-align: left
  }
</style>
