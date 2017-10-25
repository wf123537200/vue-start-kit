import Mock from 'mockjs';

Mock.mock(/\/get\/i18n_type/, () => {
  return {
    code: 'success',
    data: {
      type: 'en'
    },
    msg: 'ok'
  }
});
