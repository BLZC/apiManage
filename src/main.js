import Vue from './util/setVuePrototype';
import App from './App.vue';
import router from './router';
import store from './store';
import 'babel-polyfill';
import ElementUI from 'element-ui';
// 全局注册组件
import './components/global';
// Vue富文本编辑器
import VueQuillEditor from 'vue-quill-editor';
// 国际化
// import locale from 'element-ui/lib/locale/lang/en';

import 'element-ui/lib/theme-chalk/index.css';
// 去掉开发环境的控制台提示
Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueQuillEditor /* { default global options } */);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
