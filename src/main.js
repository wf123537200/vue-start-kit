// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
// 此处后续替换为修改过样式
import 'element-ui/lib/theme-default/index.css'
import App from './App'
import router from './router'
import ajax from '@/services/ajax'
import INTERFACE from './interface'
import error from '@/services/error'

// mock 启动
if (/localhost/.test(location.href)) {
  require('@/mock');
}

// 插件配置
Vue.use(ElementUI)
Vue.config.productionTip = false

// axios 统一配置
ajax.init()

// 全局错误初始化
error.init()

// 此处调用国际化接口，获取国际化数据
INTERFACE.getI18nType().then((data) => {
  INTERFACE.getI18n(data.type).then(() => {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: {App}
    })
  })
})
