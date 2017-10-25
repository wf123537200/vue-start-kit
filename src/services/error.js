const init = function () {
  // 建议为了方便使用，这里可以包装window.Alert
  window.Alert = function (msg) {
    window.alert(msg);
  }
};

export default {
  init
}
