import axios from 'axios';

const ajax = {
  // 获取i18n种类
  GET_LANGUAGE_TYPE: '/get/i18n_type'
};

const API_PATH_PRE_FIX = '/api/';

// 增加前缀
let INTERFACE = {};
for (let key in ajax) {
  INTERFACE[key] = API_PATH_PRE_FIX + ajax[key];
}

/**
 * 获取 i18n 的种类
 */
function getI18nType() {
  // 这里需要先调用后端保存的语言
  return axios.get(INTERFACE.GET_LANGUAGE_TYPE);
}

/**
 * 获取i18n 配置json
 *
 * @param language
 * @private
 */
function getI18n(language = 'zh') {
  return axios.get('/static/i18n/' + language + '/index.json').then((data) => {
    window.I18n = data;
  });
}

export default {
  getI18n,
  getI18nType
};
